import { Button } from '@components/buttons';
import Footer from '@components/footer';
import Header from '@components/header';
import HeroSlide from '@components/hero-slide/';
import MovieList from '@components/movieList';
import { category, movieType, tvType } from '@services/api/requestsApi';
import { Container } from '@stylesComponents/containers';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <HeroSlide rating={movieType.popular} typeHero="movie" />
      <Container>
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
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
