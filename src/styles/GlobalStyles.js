import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary colors */
    --color-primary: #6741d9;
    --color-primary-light: #7950f2;

    /* Text colors */
    --color-text: #dee2e6;
    --color-text-dark: #adb5bd;

    /* Background colors */
    --color-background-100: #343a40;
    --color-background-500: #2b3035;
    --color-background-900: #212529;

    /* Accent colors */
    --color-red: #fa5252;
    --color-red-dark: #e03131;
    --color-star: #fcc419;

    /* Transparent colors */
    --color-black-transparent-10: rgba(0, 0, 0, 0.1);
    --color-black-transparent-20: rgba(0, 0, 0, 0.2);
    --color-black-transparent-30: rgba(0, 0, 0, 0.3);
    --color-black-transparent-80: rgba(0, 0, 0, 0.8);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  html {
    font-size: 62.5%;
  }
    
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    
    color: var(--color-text);
    background-color: var(--color-background-900);
    padding: 2.4rem;
  }
`;

export default GlobalStyles;
