import Footer from '@components/footer';
import Header from '@components/header';
import HeroSlide from '@components/hero-slide';
import { MoviePoster } from '@components/movieList';
import { ContainerTable } from '@stylesComponents/containerTable';
import { SearchIcon } from '@stylesComponents/icons';
import { useMovieTable } from 'hooks/use-movie-table';
import { MovieTableStyle } from './style';

interface iMovieTable {
  movies: [];
  type: string;
  rating: string;
}

const MovieTable = ({ movies, type, rating }: iMovieTable) => {
  const { Ffilter, filter, tratedRating, tratedType } = useMovieTable(
    movies,
    type,
    rating,
  );
  return (
    <>
      {!filter && (
        <div
          style={{
            width: '100vw',
            height: '400vh',
            background:
              'linear-gradient(305deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,1) 100%)',
          }}
        />
      )}
      <Header />
      <HeroSlide rating={rating} typeHero={type} />
      <MovieTableStyle>
        <div className="transition" />
        <ContainerTable>
          <div className="Header">
            <div className="title">
              <span />
              <h1>
                {tratedType} {tratedRating}
              </h1>
              <span />
            </div>
            <form
              className="inputIcon"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                name="filmefilter"
                onChange={(e) => Ffilter(e)}
                placeholder="Search..."
              />
              <button type='submit'>
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className="allPosters">
            {filter.length ? (
              filter.map((element: any) => {
                return (
                  <div className="posters" key={element.id}>
                    {element.poster_path && (
                      <MoviePoster
                        props={element}
                        type={rating}
                        category={type}
                      />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="nothingFilter">
                <h1>
                  {tratedType === 'Movie'
                    ? 'Nenhum filme encontrado :('
                    : 'Nenhuma serie encontrada :('}
                </h1>
              </div>
            )}
          </div>
        </ContainerTable>
      </MovieTableStyle>
      <Footer />
    </>
  );
};

export default MovieTable;
