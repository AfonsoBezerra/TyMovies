import Header from '@components/header';
import HeroSlide from '@components/hero-slide';
import { ContainerTable } from '@stylesComponents/containerTable';
import { MovieTableStyle } from './style';

interface iMovieTable {
  movies: [];
  type: string;
  rating: string;
}

const MovieTable = ({ movies, type, rating }: iMovieTable) => {
  console.log(movies);
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
            <span />
            <h1>
              {tratedType} {tratedRating}
            </h1>
            <span />
          </div>
        </ContainerTable>
      </MovieTableStyle>
      ;
    </>
  );
};

export default MovieTable;
