import styled from "styled-components";

import WatchedMovie from "./WatchedMovie";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";

const StyledWatchedMoviesList = styled.ul`
  list-style: none;
  padding: 0.8rem 0;
`;

function WatchedMoviesList() {
  const { watchedMovies } = useWatchedMoviesContext();

  return (
    <StyledWatchedMoviesList>
      {watchedMovies.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </StyledWatchedMoviesList>
  );
}

export default WatchedMoviesList;
