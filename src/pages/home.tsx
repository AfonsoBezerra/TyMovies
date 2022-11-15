import { Button } from '@components/buttons';
import Footer from '@components/footer';
import Header from '@components/header';
import HeroSlide from '@components/hero-slide/';
import MovieList from '@components/movieList';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { category, movieType, tvType } from '@services/api/requestsApi';
import { getCookie } from '@services/cookies';
import { Container } from '@stylesComponents/containers';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

const Main = () => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <HeroSlide rating={movieType.popular} typeHero="movie" />
      <Container>
        <div className="transition" />
        <div className="listas">
          <div className="tendence">
            <div className="headerTendence">
              <h1>Tranding movies</h1>
              <Button onClick={() => router.push('/movie/popular')}>
                View more
              </Button>
            </div>
            <MovieList category={category.movie} type={movieType.popular} />
          </div>
          <div className="tendence">
            <div className="headerTendence">
              <h1>Top Rated movies</h1>
              <Button onClick={() => router.push('/movie/top_rated')}>
                View more
              </Button>
            </div>
            <MovieList category={category.movie} type={movieType.top_rated} />
          </div>
          <div className="tendence">
            <div className="headerTendence">
              <h1>Trading series</h1>
              <Button onClick={() => router.push('/tv/popular')}>
                View more
              </Button>
            </div>
            <MovieList category={category.tv} type={tvType.popular} />
          </div>
          <div className="tendence">
            <div className="headerTendence">
              <h1>Top Rated series</h1>
              <Button onClick={() => router.push('/tv/top_rated')}>
                View more
              </Button>
            </div>
            <MovieList category={category.tv} type={tvType.top_rated} />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const cookie = getCookie(ctx, AUTH_COOKIE_NAME);
  if (!cookie) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  const imgVerify = getCookie(ctx, '__VERIFY_LOGIN_IMG_COOKIE');
  if (imgVerify) {
    return {
      redirect: {
        destination: '/user',
        permanent: false,
      },
    };
  }
  return { props: {} };
};
