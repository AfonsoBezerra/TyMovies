import HeroDetail from '@components/hero-detail';
import requestsApi from '@services/api/requestsApi';
import { GetServerSideProps } from 'next';

const Movie = ({ movie, type }: any) => {
  return <HeroDetail item={movie} type={type} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await requestsApi
    .detail(params?.category, params?.movie)
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
  return { props: { movie: data.data, type: params?.category } };
};

export default Movie;
