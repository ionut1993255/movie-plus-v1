import MovieItem from "./MovieItem";

import { useMoviesContext } from "../../contexts/MoviesContext";

function MovieList() {
  const { movies } = useMoviesContext();

  return (
    <ul>
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
