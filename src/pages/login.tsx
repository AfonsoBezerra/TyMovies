import Header from '@components/header';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { getCookie } from '@services/cookies';
import { FormStyle } from '@stylesComponents/containerForm';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

const Login = () => {
  const { signInGoogle, signInWithEmailAndPassword } = useAuthContext();

  return (
    <>
      <Header />
      <FormStyle>
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
            <input
              type="email"
              required
              placeholder="Endereco de e-mail"
              name="email"
            />
            <input type="password" required placeholder="Senha" name="pass" />
            <div className="buttonsForm">
              <button
                style={{ color: 'white', marginRight: '1rem' }}
                type="submit"
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

export default Login;
