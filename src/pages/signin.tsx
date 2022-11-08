import Header from '@components/header';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { getCookie } from '@services/cookies';
import { FormStyle } from '@stylesComponents/containerForm';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';

const SignIn = () => {
  const { signInGoogle, createUserWithEmailAndPassword } = useAuthContext();
  const [error, setError] = useState<number>();
  return (
    <>
      <Header />
      <FormStyle>
        <h1>Cadastre-se</h1>
        <div className="containerForm">
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
            />
            <input
              type="email"
              required
              placeholder="Endereco de e-mail"
              name="email"
              autoComplete="off"
            />
            <label htmlFor="pass">
              <input
                id="pass"
                type="password"
                required
                placeholder="Senha"
                name="pass"
                autoComplete="off"
                onInput={() => error === 2 && setError(0)}
              />
              {error === 2 && <span>Senhas não coincidem</span>}
            </label>
            <label htmlFor="passConfim">
              <input
                id="passConfirm"
                type="password"
                required
                placeholder="Confirmar senha"
                name="passConfirm"
                autoComplete="off"
                onInput={() => error === 2 && setError(0)}
              />
              {error === 2 && <span>Senhas não coincidem</span>}
            </label>
            <div className="buttonsForm">
              <button
                style={{ color: 'white', marginRight: '1rem' }}
                type="submit"
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
          </div>
        </div>
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
