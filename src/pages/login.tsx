import Header from '@components/header';
import InputError from '@components/inputError';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { getCookie } from '@services/cookies';
import { FormStyle } from '@stylesComponents/containerForm';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loading } from 'react-loading-dot';

const Login = () => {
  const {
    signInGoogle,
    signInWithEmailAndPassword,
    errorLogin,
    setErroLogin,
    loading,
  } = useAuthContext();

  useEffect(() => {
    setErroLogin(false);
  }, []);

  const router = useRouter();
  return (
    <>
      <Header />
      <FormStyle>
        {loading ? (
          <Loading background="rgb(57, 19, 76)" />
        ) : (
          <>
            <h1>Entrar</h1>
            <div className="containerForm">
              <form
                autoComplete="none"
                onSubmit={(e: any) => {
                  e.preventDefault();
                  signInWithEmailAndPassword(
                    e.target.email.value,
                    e.target.pass.value,
                  );
                }}
              >
                <span>Você tem uma conta da TyMovies?</span>
                <label htmlFor="email">
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Endereco de e-mail"
                    name="email"
                    style={errorLogin ? { border: '1px solid red' } : {}}
                    onInput={() => setErroLogin(false)}
                  />
                  {errorLogin && (
                    <InputError>Email ou senha incorretos</InputError>
                  )}
                </label>
                <label htmlFor="pass">
                  <input
                    id="pass"
                    type="password"
                    required
                    placeholder="Senha"
                    name="pass"
                    autoComplete="off"
                    style={errorLogin ? { border: '1px solid red' } : {}}
                    onInput={() => setErroLogin(false)}
                  />
                  {errorLogin && (
                    <InputError>Email ou senha incorretos</InputError>
                  )}
                </label>
                <div className="buttonsForm">
                  <button
                    style={{ color: 'white', marginRight: '1rem' }}
                    type="submit"
                    disabled={loading}
                  >
                    Entrar
                  </button>
                  <Link href="/">Esqueceu sua senha?</Link>
                </div>
              </form>
              <div className="separator">
                <span />
                <h3>Ou</h3>
                <span />
              </div>
              <div className="buttonGoogle">
                <button
                  style={{ color: 'white' }}
                  type="button"
                  onClick={() => signInGoogle()}
                >
                  <img src="./btn_google_signin.png" alt="buttonGoogle" />
                </button>
                <button
                  type="submit"
                  className="cadas"
                  onClick={() => router.push('/signin')}
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </>
        )}
      </FormStyle>
    </>
  );
};

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const cookie = getCookie(ctx, AUTH_COOKIE_NAME);
  if (cookie) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default Login;
