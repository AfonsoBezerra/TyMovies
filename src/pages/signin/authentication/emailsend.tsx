import { delCookie, getCookie } from '@services/cookies';
import { ContainerAuthentication } from '@stylesComponents/ContainerAuthentication';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const emailSendMsg = getCookie(ctx, '__SEND_EMAIL_MSG_COOKIE');
  if (!emailSendMsg) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return { props: {} };
};

const Authentication = () => {
  useEffect(() => {
    delCookie(undefined, '__SEND_EMAIL_MSG_COOKIE');
  }, []);

  const router = useRouter();
  return (
    <ContainerAuthentication>
      <div className="mensage">
        <h1>Um email de autenticação foi enviado!</h1>
        <span>Verifique a caixa de spam.</span>
        <div className="buttons">
          <button type="button" onClick={() => router.back()}>
            Voltar
          </button>
          <button type="button" onClick={() => router.push('/login')}>
            Logar
          </button>
        </div>
      </div>
    </ContainerAuthentication>
  );
};

export default Authentication;
