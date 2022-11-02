import MovieTable from '@components/movieTable';
import apiConfig from '@services/api/apiConfig';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          category: 'movie',
          rating: 'popular',
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { apiKey } = apiConfig;
  const responsePopular = await fetch(
    `https://api.themoviedb.org/3/${context.params?.category}/${context.params?.rating}?api_key=${apiKey}`,
  );
  const dataPopular = await responsePopular.json();
  const { results } = dataPopular;
  if (!results) {
    return {
      redirect: {
        destination: '/',
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

const viewMore = ({ rating, ratingMovie, type }: any) => {
  return <MovieTable movies={ratingMovie[0]} rating={rating} type={type} />;
};

export default viewMore;
