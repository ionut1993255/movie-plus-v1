import AppLayout from "./ui/AppLayout";

import GlobalStyles from "./styles/GlobalStyles";

import { MoviesProvider } from "./contexts/MoviesContext";
import { WatchedMoviesProvider } from "./contexts/WatchedMoviesContext";

function App() {
  return (
    <>
      <GlobalStyles />

      <MoviesProvider>
        <WatchedMoviesProvider>
          <AppLayout />
        </WatchedMoviesProvider>
      </MoviesProvider>
    </>
  );
}

export default App;
