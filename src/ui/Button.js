import styled, { css } from "styled-components";

const buttonBaseStyles = css`
  border: none;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s;
`;

const buttonAbsoluteStyles = css`
  ${buttonBaseStyles}
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const StyledButton = styled.button`
  ${({ type }) => {
    switch (type) {
      case "add":
        return css`
          ${buttonBaseStyles}
          background-color: var(--color-primary);
          color: var(--color-text);
          border-radius: 10rem;
          font-size: 1.4rem;
          padding: 1rem;

          &:hover {
            background-color: var(--color-primary-light);
          }
        `;
      case "delete":
        return css`
          ${buttonAbsoluteStyles}
          right: 2.4rem;
          height: 1.8rem;
          background-color: var(--color-red);
          color: var(--color-background-900);
          font-size: 0.9rem;

          &:hover {
            background-color: var(--color-red-dark);
          }
        `;
      case "toggle":
        return css`
          ${buttonAbsoluteStyles}
          top: 0.8rem;
          right: 0.8rem;
          height: 2.4rem;
          background-color: var(--color-background-900);
          color: var(--color-text);
          font-size: 1.4rem;
        `;
      case "back":
        return css`
          ${buttonAbsoluteStyles}
          top: 0.6rem;
          left: 0.6rem;
          height: 3.2rem;
          background-color: var(--color-text);
          color: var(--color-background-500);
          box-shadow: 0 8px 20px var(--color-black-transparent-80);
          font-family: sans-serif;
          font-size: 2.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        `;
      default:
        return null;
    }
  }}
`;

function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
