import { delCookie, setCookie } from '@services/cookies';
import { Auth } from '@services/firebase';
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
  user: null | iUser;
  loading: boolean;
}
const AuthContext = createContext<iAuthContext>({} as iAuthContext);

interface iAuthProvider {
  children: React.ReactNode;
}

export const AUTH_COOKIE_NAME = '__HOST_TYMOVIES_USER_COOKIE';

const FormatUser = (user: User) =>
  ({
    email: user.email,
    name: user.displayName,
    uid: user.uid,
  } as iUser);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [user, setUser] = useState<null | iUser>(null);
  const [loading, setLoading] = useState(false);
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

  const handleUser = (currentUser: User | undefined) => {
    if (currentUser) {
      const formattedUser = FormatUser(currentUser);
      setUser(formattedUser);
      setSession(currentUser.refreshToken);
      return currentUser.email;
    }
    setUser(null);
    setSession(undefined);
    return false;
  };
  const signInWithEmailAndPassword = (email: string, password: string) => {
    try {
      setLoading(true);
      Auth.signInWithEmailAndPassword(Auth.auth, email, password).then(
        ({ user: userFirebase }) => {
          handleUser(userFirebase);
        },
      );
    } finally {
      setLoading(false);
    }
  };

  const signInGoogle = () => {
    try {
      setLoading(true);
      Auth.signInWithPopup(Auth.auth, Auth.GoogleProvider)
        .then(({ user: userFirebase }) => {
          handleUser(userFirebase);
        })
        .then(() => {
          setLoading(false);
          router.push('/home');
        })
        .catch(() => {
          // catch error
        });
    } finally {
      // always runs
    }
  };

  const signOut = () => {
    try {
      setLoading(true);
      Auth.signOut(Auth.auth).then(() => {
        handleUser(undefined);
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
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
