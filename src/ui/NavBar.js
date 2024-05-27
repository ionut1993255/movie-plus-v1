import styled from "styled-components";

import Logo from "./Logo";
import SearchMovie from "../features/movie/SearchMovie";
import NumMovieResults from "../features/movie/NumMovieResults";

const StyledNavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  background-color: var(--color-primary);
  border-radius: 0.9rem;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <Logo />
      <SearchMovie />
      <NumMovieResults />
    </StyledNavBar>
  );
}

export default NavBar;
