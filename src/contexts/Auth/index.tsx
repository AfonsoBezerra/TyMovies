import { delCookie, setCookie } from '@services/cookies';
import { Auth } from '@services/firebase';
import axios from 'axios';
import { NextOrObserver, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, useEffect, useMemo, useState } from 'react';

interface iUser {
  email: string;
  name?: string;
  uid: string;
  img?: string;
}

interface iAuthContext {
  signInWithEmailAndPassword: (email: string, password: string) => void;
  signInGoogle: () => void;
  signOut: () => void;
  setSucess: (value: boolean) => void;
  sucess: boolean;
  setErroAuth: (value: boolean) => void;
  user: null | iUser;
  loading: boolean;
  errorAuth: boolean;
  createUserWithEmailAndPassword: (
    email: string,
    password: string,
    name: string,
  ) => void;
  recoverPass: (email: string) => void;
}
const AuthContext = createContext<iAuthContext>({} as iAuthContext);

interface iAuthProvider {
  children: React.ReactNode;
}

export const AUTH_COOKIE_NAME = '__HOST_TYMOVIES_USER_COOKIE';

const FormatUser = (user: User, others: { name: string; img: string }) =>
  ({
    email: user.email,
    uid: user.uid,
    ...others,
  } as iUser);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [user, setUser] = useState<null | iUser>(null);
  const [errorAuth, setErroAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const router = useRouter();

  const setSession = (session: undefined | string) => {
    if (session) {
      setCookie(undefined, AUTH_COOKIE_NAME, session, {
        maxAge: 1000 * 60 * 60 * 24 * 2,
        path: '/',
      });
    } else {
      delCookie(undefined, AUTH_COOKIE_NAME);
    }
  };

  const handleUser = async (currentUser: User | undefined) => {
    if (currentUser) {
      await axios.get(`/api/user/${currentUser.uid}`).then((res) => {
        const formattedUser = FormatUser(currentUser, {
          name: res.data.name,
          img: res.data.img,
        });
        setUser(formattedUser);
        if (Auth.auth.currentUser?.emailVerified) {
          setSession(currentUser.refreshToken);
        }
      });
      return currentUser.email;
    }
    setUser(null);
    setSession(undefined);
    return false;
  };

  const createUserWithEmailAndPassword = (
    email: string,
    password: string,
    name: string,
  ) => {
    try {
      setLoading(true);
      const img = '';
      Auth.createUserWithEmailAndPassword(Auth.auth, email, password)
        .then(async ({ user: userFirebase }) => {
          await Auth.sendEmailVerification(userFirebase).then(async () => {
            await axios.post(`/api/user/${userFirebase.uid}`, {
              email,
              name,
              img,
            });
          });
        })
        .then(() => {
          setCookie(undefined, '__SEND_EMAIL_MSG_COOKIE', 'true', {
            maxAge: 1000 * 60 * 5,
            path: '/',
          });
          router.push(`/signin/authentication/emailsend`);
        })
        .then(() => setTimeout(() => setLoading(false), 1000))
        .catch(() => {
          setLoading(false);
          setErroAuth(true);
        });
    } finally {
      // always runs
    }
  };

  const signInWithEmailAndPassword = (email: string, password: string) => {
    try {
      setLoading(true);
      Auth.signInWithEmailAndPassword(Auth.auth, email, password)
        .then(async ({ user: userFirebase }) => {
          if (!Auth.auth.currentUser?.emailVerified) {
            setLoading(false);
            setErroAuth(true);
          } else {
            await handleUser(userFirebase);
          }
        })
        .then(() => {
          router.push('/home');
        })
        .then(() => setTimeout(() => setLoading(false), 1000))
        .catch(() => {
          setLoading(false);
          setErroAuth(true);
        });
    } finally {
      // always runs
    }
  };

  const recoverPass = (email: string) => {
    try {
      setLoading(true);
      Auth.sendPasswordResetEmail(Auth.auth, email)
        .then(() => {
          setLoading(false);
          setSucess(true);
        })
        .catch(() => {
          setLoading(false);
          setErroAuth(true);
        });
    } finally {
      // always runs
    }
  };

  const signInGoogle = () => {
    try {
      setLoading(true);
      Auth.signInWithPopup(Auth.auth, Auth.GoogleProvider)
        .then(async ({ user: userFirebase }) => {
          await axios.post(`/api/user/${userFirebase.uid}`, {
            email: userFirebase.email,
            name: userFirebase.displayName,
            img: '',
          });
          handleUser(userFirebase);
        })
        .then(() => {
          router.push('/home');
        })
        .then(() => setTimeout(() => setLoading(false), 1000))
        .catch(() => {
          setLoading(false);
        });
    } finally {
      // always runs
    }
  };

  const signOut = () => {
    try {
      setLoading(true);
      Auth.signOut(Auth.auth)
        .then(() => {
          handleUser(undefined);
        })
        .catch(() => {
          setErroAuth(true);
        });
    } finally {
      setLoading(false);
      router.push('/');
    }
  };

  useEffect(() => {
    const unSubscribe = Auth.onIdTokenChanged(
      Auth.auth,
      handleUser as NextOrObserver<User>,
    );
    return () => unSubscribe();
  }, []);

  const value = useMemo(
    () => ({
      signInWithEmailAndPassword,
      signInGoogle,
      signOut,
      user,
      loading,
      errorAuth,
      setErroAuth,
      createUserWithEmailAndPassword,
      recoverPass,
      sucess,
      setSucess,
    }),
    [user, loading, errorAuth, sucess],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
