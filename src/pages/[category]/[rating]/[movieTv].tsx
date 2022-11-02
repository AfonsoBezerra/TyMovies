import HeroDetail from '@components/hero-detail';
import apiConfig from '@services/api/apiConfig';
import requestsApi from '@services/api/requestsApi';
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const { apiKey } = apiConfig;
  const responsePopular = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
  );

  const dataPopular = await responsePopular.json();

  const PathsMoviesTv = dataPopular.results.map((movies: any) => {
    return {
      params: {
        category: 'movie',
        rating: 'popular',
        movieTv: `${movies.id}`,
      },
    };
  });
  return {
    paths: [...PathsMoviesTv],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
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
