import Header from '@components/header';
import HeroSlide from '@components/hero-slide';
import { MoviePoster } from '@components/movieList';
import { ContainerTable } from '@stylesComponents/containerTable';
import { SearchIcon } from '@stylesComponents/icons';
import { MovieTableStyle } from './style';

interface iMovieTable {
  movies: [];
  type: string;
  rating: string;
}

const MovieTable = ({ movies, type, rating }: iMovieTable) => {
  const splitRating = rating.split('_');
  const tratedType = type[0].toUpperCase() + type.substr(1);
  let tratedRating;
  if (splitRating.length <= 1) {
    tratedRating = splitRating[0][0].toUpperCase() + splitRating[0].substr(1);
  } else {
    tratedRating = `${
      splitRating[0][0].toUpperCase() + splitRating[0].substr(1)
    } ${splitRating[1][0].toUpperCase()}${splitRating[1].substr(1)}`;
  }
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
            <div className="inputIcon">
              <input type="text" placeholder="Search..." />
              <SearchIcon onClick={() => console.log('alo')} />
            </div>
          </div>
          <div className="allPosters">
            {movies.map((element: any) => {
              return (
                <div className="posters" key={element.id}>
                  {element.poster_path && (
                    <MoviePoster
                      props={element}
                      category={rating}
                      type={type}
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
