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
  userName: string;
  borderColor: string;
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
  setImgProp: (obj: object | null) => void;
  imgProp: object | null;
  setUser: (args: any) => void;
  deleteAcount: () => void;
}
const AuthContext = createContext<iAuthContext>({} as iAuthContext);

interface iAuthProvider {
  children: React.ReactNode;
}

export const AUTH_COOKIE_NAME = '__HOST_TYMOVIES_USER_COOKIE';

const FormatUser = (
  user: User,
  others: { name: string; img: string; userName: string; borderColor: string },
) =>
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
  const [imgProp, setImgProp] = useState({} || null);
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
          userName: res.data.userName ? res.data.userName : res.data.name,
          borderColor: res.data.borderColor,
        });
        setUser(formattedUser);
        if (Auth.auth.currentUser?.emailVerified) {
          if (!formattedUser.img) {
            setCookie(undefined, '__VERIFY_LOGIN_IMG_COOKIE', 'true', {
              maxAge: 100,
              path: '/',
            });
          }
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
      Auth.createUserWithEmailAndPassword(Auth.auth, email, password)
        .then(async ({ user: userFirebase }) => {
          await Auth.sendEmailVerification(userFirebase).then(async () => {
            await axios.post(`/api/user/${userFirebase.uid}`, {
              email,
              name,
              userName: name,
              img: '',
              borderColor: '',
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
          const responseUser = await axios.get(`/api/user/${userFirebase.uid}`);
          if (!responseUser.data.userName || !responseUser.data) {
            await axios.post(`/api/user/${userFirebase.uid}`, {
              email: userFirebase.email,
              name: userFirebase.displayName,
              userName: userFirebase.displayName,
            });
          }
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
          handleUser(undefined).then(() => {
            router.push('/');
          });
        })
        .catch(() => {
          setErroAuth(true);
        });
    } finally {
      setLoading(false);
    }
  };

  const deleteAcount = () => {
    try {
      Auth.deleteUser(Auth.auth.currentUser!)
        .then()
        .catch((error) => {
          console.log(error);
        });
    } catch {
      // do someting
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
      setUser,
      errorAuth,
      setErroAuth,
      createUserWithEmailAndPassword,
      recoverPass,
      sucess,
      setSucess,
      setImgProp,
      imgProp,
      deleteAcount,
    }),
    [user, loading, errorAuth, sucess, imgProp],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
