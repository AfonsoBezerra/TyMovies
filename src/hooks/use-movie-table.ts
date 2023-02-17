import { useState } from 'react';

export function useMovieTable(movies: any, type: any, rating: any) {
  const [filter, setFilter] = useState(movies);
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
  function Ffilter(e: any) {
    e.preventDefault();
    const filterValue = e.target.value;
    if (filterValue) {
      const nameFilter =
        filterValue.length > 1
          ? movies.filter((el: any) =>
              type === 'movie'
                ? el.title
                    .toLowerCase()
                    .replace(/[^\w\s]/gi, ' ')
                    .includes(filterValue.toLowerCase())
                : el.name
                    .toLowerCase()
                    .replace(/[^\w\s]/gi, ' ')
                    .includes(filterValue.toLowerCase()),
            )
          : movies.filter((el: any) =>
              type === 'movie'
                ? el.title[0].toLowerCase() === filterValue.toLowerCase()
                : el.name[0].toLowerCase() === filterValue.toLowerCase(),
            );
      setFilter(nameFilter);
    } else {
      setFilter(movies);
    }
  }
  return { tratedType, tratedRating, filter, Ffilter };
}
