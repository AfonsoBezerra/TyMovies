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
    fallback: false,
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
  // const router = useRouter();
  // useEffect(() => {
  //   const cookie = getCookie(undefined, AUTH_COOKIE_NAME);
  //   if (!cookie) {
  //     router.push('/login');
  //   }
  // }, []);
  return <MovieTable movies={ratingMovie[0]} rating={rating} type={type} />;
};

export default ViewMore;
