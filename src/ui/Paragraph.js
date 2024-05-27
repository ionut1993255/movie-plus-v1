import styled, { css } from "styled-components";

const paragraphBaseStyles = css`
  text-align: center;
  font-size: 2rem;
`;

const Paragraph = styled.p`
  ${({ className }) => {
    switch (className) {
      case "num-results":
        return css`
          justify-self: end;
          font-size: 1.8rem;
        `;
      case "loader":
        return css`
          ${paragraphBaseStyles}
          text-transform: uppercase;
          font-weight: 600;
          margin: 4.8rem;
        `;
      case "error":
        return css`
          ${paragraphBaseStyles}
          padding: 4.8rem;
        `;
      default:
        return css`
          display: flex;
          align-items: center;
          gap: 0.8rem;
        `;
    }
  }}
`;

export default Paragraph;
