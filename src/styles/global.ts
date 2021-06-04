import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  :root {
    --red: #CD1F1F;
    --green: #1FCD64;
    --blue-dark: #1F2033;

    --text-dark: #1C1C1C;
    --text-white: #F2F2F2;

    --background: #F2F5F6;
    
    --input-background: #E1EAED;
    --input-placeholder: #999AB6;

    --list-odd: #DDDFE5;
    --list-pair: #A4AABA;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`