import styled from "styled-components";

import Box from "./Box";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import MovieList from "../features/movie/MovieList";
import MovieDetails from "../features/movie/MovieDetails";
import WatchedMoviesSummary from "../features/movie/WatchedMoviesSummary";
import WatchedMoviesList from "../features/movie/WatchedMoviesList";

import { useMoviesContext } from "../contexts/MoviesContext";
import { useWatchedMoviesContext } from "../contexts/WatchedMoviesContext";

const StyledMain = styled.main`
  margin-top: 2.4rem;
  height: 95.6vh;
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`;

function Main() {
  const { isLoading, error } = useMoviesContext();
  const { selectedMovieId } = useWatchedMoviesContext();

  return (
    <StyledMain>
      <Box>
        {isLoading && <Loader />}
        {!isLoading && !error && <MovieList />}
        {error && <ErrorMessage message={error} />}
      </Box>

      <Box>
        {selectedMovieId ? (
          <MovieDetails />
        ) : (
          <>
            <WatchedMoviesSummary />
            <WatchedMoviesList />
          </>
        )}
      </Box>
    </StyledMain>
  );
}

export default Main;
