import Header from '@components/header';
import InputError from '@components/inputError';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { getCookie } from '@services/cookies';
import { FormStyle } from '@stylesComponents/containerForm';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loading } from 'react-loading-dot';

const SignIn = () => {
  const {
    signInGoogle,
    createUserWithEmailAndPassword,
    loading,
    errorLogin,
    setErroLogin,
  } = useAuthContext();
  const [error, setError] = useState<number>();
  const router = useRouter();
  useEffect(() => {
    setErroLogin(false);
  }, []);
  return (
    <>
      <Header />
      <FormStyle>
        {loading ? (
          <Loading background="rgb(57, 19, 76)" />
        ) : (
          <>
            <h1>Cadastrar</h1>
            <div className="containerForm">
              {errorLogin && (
                <div className="error">
                  <InputError>Email ja cadastrado! Use outro...</InputError>
                </div>
              )}

              <form
                autoComplete="off"
                onSubmit={(e: any) => {
                  e.preventDefault();
                  const credencials = {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    pass: e.target.pass.value,
                    passConfirm: e.target.passConfirm.value,
                  };
                  if (credencials.pass !== credencials.passConfirm) {
                    setError(2);
                    return;
                  }
                  if (credencials.pass.length < 8) {
                    setError(3);
                    return;
                  }
                  createUserWithEmailAndPassword(
                    credencials.email,
                    credencials.pass,
                    credencials.name,
                  );
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Nome de usuario"
                  name="name"
                  autoComplete="off"
                  style={errorLogin ? { border: '1px solid red' } : {}}
                  onInput={() => setErroLogin(false)}
                />
                <input
                  type="email"
                  required
                  placeholder="Endereco de e-mail"
                  name="email"
                  autoComplete="off"
                  style={errorLogin ? { border: '1px solid red' } : {}}
                  onInput={() => setErroLogin(false)}
                />
                <label htmlFor="pass">
                  <input
                    id="pass"
                    type="password"
                    required
                    placeholder="Senha"
                    name="pass"
                    autoComplete="off"
                    style={
                      error === 2 || error === 3 || errorLogin
                        ? { border: '1px solid red' }
                        : {}
                    }
                    onInput={() =>
                      (error === 2 && setError(0)) ||
                      (error === 3 && setError(0)) ||
                      setErroLogin(false)
                    }
                  />
                  {error === 2 && <InputError>Senhas não coincidem</InputError>}
                  {error === 3 && (
                    <InputError>Senha de no minimo 8 caracteres</InputError>
                  )}
                </label>
                <label htmlFor="passConfim">
                  <input
                    id="passConfirm"
                    type="password"
                    required
                    placeholder="Confirmar senha"
                    name="passConfirm"
                    autoComplete="off"
                    style={
                      error === 2 || error === 3 || errorLogin
                        ? { border: '1px solid red' }
                        : {}
                    }
                    onInput={() =>
                      (error === 2 && setError(0)) ||
                      (error === 3 && setError(0)) ||
                      setErroLogin(false)
                    }
                  />
                  {error === 2 && <InputError>Senhas não coincidem</InputError>}
                  {error === 3 && (
                    <InputError>Senha de no minimo 8 caracteres</InputError>
                  )}
                </label>
                <div className="buttonsForm">
                  <button
                    style={{ color: 'white', marginRight: '1rem' }}
                    type="submit"
                    disabled={loading}
                  >
                    Cadastrar
                  </button>
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
                  onClick={() => router.push('/login')}
                >
                  Entrar
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

export default SignIn;
