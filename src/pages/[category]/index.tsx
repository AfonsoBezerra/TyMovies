import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { getCookie } from '@services/cookies';
import { GetServerSideProps } from 'next';

const HomeMovie = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookie = getCookie(ctx, AUTH_COOKIE_NAME);
  if (!cookie) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
};

export default HomeMovie;
