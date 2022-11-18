import InputError from '@components/inputError';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { Alert, Snackbar } from '@mui/material';
import { getCookie } from '@services/cookies';
import { PageRecover } from '@stylesComponents/containerRecover';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loading } from 'react-loading-dot';

const ChangePass = () => {
  const router = useRouter();
  const { recoverPass, errorAuth, setErroAuth, loading, sucess, setSucess } =
    useAuthContext();

  useEffect(() => {
    setErroAuth(false);
  }, []);

  return (
    <>
      <Snackbar
        open={sucess}
        autoHideDuration={6000}
        onClose={() => setSucess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSucess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Email enviado
        </Alert>
      </Snackbar>
      <PageRecover>
        {loading ? (
          <Loading background="rgb(57, 19, 76)" />
        ) : (
          <div className="container">
            <form
              autoComplete="none"
              onSubmit={(e: any) => {
                e.preventDefault();
                recoverPass(e.target.email.value);
              }}
            >
              <span>Digite o email para recuperação</span>
              <div className="FormFlex">
                <label htmlFor="email">
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Endereco de e-mail"
                    name="email"
                    style={errorAuth ? { border: '1px solid red' } : {}}
                    onInput={() => setErroAuth(false)}
                  />
                  {errorAuth && <InputError>Email não encontrado</InputError>}
                </label>
                <button type="submit">Recuperar</button>
              </div>
            </form>
            <div className="separator">
              <span />
            </div>
            <div className="buttons">
              <button type="submit" onClick={() => router.back()}>
                Voltar
              </button>
            </div>
          </div>
        )}
      </PageRecover>
    </>
  );
};

export default ChangePass;

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
