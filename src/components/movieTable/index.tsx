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
      <Header />
      <HeroSlide rating={rating} typeHero={type} />
      <MovieTableStyle>
        <ContainerTable>
          <div className="Header">
            <div className="title">
              <span />
              <h1>
                {tratedType} {tratedRating}
              </h1>
              <span />
            </div>
            <form onSubmit={(e) => Ffilter(e)} className="inputIcon">
              <input name="filmefilter" placeholder="Search..." />
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className="allPosters">
            {filter.map((element: any) => {
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
            })}
          </div>
        </ContainerTable>
      </MovieTableStyle>
      ;
    </>
  );
};

export default MovieTable;
