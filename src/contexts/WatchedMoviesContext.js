import { createContext, useContext, useState } from "react";

import { useMovieDetails } from "../features/movie/useMovieDetails";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const WatchedMoviesContext = createContext();

function WatchedMoviesProvider({ children }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { movie, isLoading, error } = useMovieDetails(selectedMovieId);
  const [watchedMovies, setWatchedMovies] = useLocalStorageState([], "watched");

  function handleSelectMovie(movieId) {
    setSelectedMovieId((prevMovieId) =>
      movieId === prevMovieId ? null : movieId
    );
  }

  function handleCloseMovie() {
    setSelectedMovieId(null);
  }

  function handleAddToWatched(movie) {
    setWatchedMovies((prevMoviesWatched) => [...prevMoviesWatched, movie]);
  }

  function handleRemoveFromWatched(movieId) {
    setWatchedMovies((prevMoviesWatched) =>
      prevMoviesWatched.filter((movie) => movie.imdbID !== movieId)
    );
  }

  return (
    <WatchedMoviesContext.Provider
      value={{
        selectedMovieId,
        watchedMovies,
        movie,
        isLoading,
        error,
        handleSelectMovie,
        handleCloseMovie,
        handleAddToWatched,
        handleRemoveFromWatched,
      }}
    >
      {children}
    </WatchedMoviesContext.Provider>
  );
}

function useWatchedMoviesContext() {
  const context = useContext(WatchedMoviesContext);

  if (context === undefined)
    throw new Error(
      "WatchedMoviesContext was used outside of the WatchedMoviesProvider."
    );

  return context;
}

export { WatchedMoviesProvider, useWatchedMoviesContext };
