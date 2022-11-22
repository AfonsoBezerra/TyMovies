import HeroDetail from '@components/hero-detail';
import requestsApi from '@services/api/requestsApi';
import { getCookie } from '@services/cookies';

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = getCookie(context, '__HOST_TYMOVIES_USER_COOKIE');
  if (!cookies) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  const data = await requestsApi
    .detail(context.params?.category, context.params?.movieTv)
    .then((res) => res)
    .catch(() => null);

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: { movie: data.data, type: context.params?.category } };
};

const MovieTv = ({ movie, type }: any) => {
  return <HeroDetail item={movie} type={type} />;
};

export default MovieTv;
