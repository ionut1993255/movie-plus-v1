import styled from "styled-components";

import Img from "../../ui/Img";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";

import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";

const StyledWatchedMovie = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;
  font-size: 1.6rem;
  align-items: center;
  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid var(--color-background-100);

  &:last-child {
    border-bottom: none;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`;

function WatchedMovie({ movie }) {
  const { handleRemoveFromWatched } = useWatchedMoviesContext();

  const { poster, title, imdbRating, userRating, runtime, imdbID } = movie;

  return (
    <StyledWatchedMovie>
      <Img src={poster} alt={`${title} poster`} />

      <Heading as="h3">{title}</Heading>

      <div>
        <Paragraph>
          <span>⭐️</span>
          <span>{imdbRating || 0}</span>
        </Paragraph>

        <Paragraph>
          <span>🌟</span>
          <span>{userRating}</span>
        </Paragraph>

        <Paragraph>
          <span>⏳</span>
          <span>{runtime || 0} min</span>
        </Paragraph>

        <Button type="delete" onClick={() => handleRemoveFromWatched(imdbID)}>
          X
        </Button>
      </div>
    </StyledWatchedMovie>
  );
}

export default WatchedMovie;
