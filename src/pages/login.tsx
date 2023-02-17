import CookiesModal from '@components/cookies';
import Header from '@components/header';
import InputError from '@components/inputError';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { getCookie } from '@services/cookies';
import { FormStyle } from '@stylesComponents/containerForm';
import { EyeIcon, EyeOffIcon } from '@stylesComponents/icons';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loading } from 'react-loading-dot';

const Login = (props: any) => {
  const {
    signInGoogle,
    signInWithEmailAndPassword,
    errorAuth,
    setErroAuth,
    loading,
  } = useAuthContext();
  const { disableButton } = props;

  const [show, setShow] = useState(false);
  useEffect(() => {
    setErroAuth(false);
  }, []);

  const router = useRouter();
  return (
    <>
      {!disableButton && <CookiesModal />}
      <Header />
      <FormStyle>
        {loading ? (
          <Loading size='12px' background="rgb(255, 255,  255)" />
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
                    placeholder="Endereço de e-mail"
                    name="email"
                    style={errorAuth ? { border: '1px solid red' } : {}}
                    onInput={() => setErroAuth(false)}
                  />
                  {errorAuth && (
                    <InputError>Email ou senha incorretos</InputError>
                  )}
                </label>
                <label htmlFor="pass">
                  <div className="passWithIcon">
                    <input
                      id="pass"
                      type={show ? 'text' : 'password'}
                      required
                      placeholder="Senha"
                      name="pass"
                      autoComplete="off"
                      style={errorAuth ? { border: '1px solid red' } : {}}
                      onInput={() => setErroAuth(false)}
                    />
                    {!show ? (
                      <EyeOffIcon onClick={() => setShow(true)} />
                    ) : (
                      <EyeIcon onClick={() => setShow(false)} />
                    )}
                  </div>
                  {errorAuth && (
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
                  <Link href="/recover">Esqueceu sua senha?</Link>
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
  const cookies = getCookie(ctx, '__VERIFY_COOKIES_MODAL');
  if (cookie) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return { props: { disableButton: !!cookies } };
};

export default Login;
