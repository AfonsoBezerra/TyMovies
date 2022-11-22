import MovieTable from '@components/movieTable';
import apiConfig from '@services/api/apiConfig';
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
  const { apiKey } = apiConfig;
  const responsePopular = await fetch(
    `https://api.themoviedb.org/3/${context.params?.category}/${context.params?.rating}?api_key=${apiKey}`,
  );
  const dataPopular = await responsePopular.json();
  const { results } = dataPopular;
  if (!results) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: {
      rating: context.params?.rating,
      ratingMovie: [results],
      type: context.params?.category,
    },
  };
};

const ViewMore = ({ rating, ratingMovie, type }: any) => {
  return <MovieTable movies={ratingMovie[0]} rating={rating} type={type} />;
};

export default ViewMore;
