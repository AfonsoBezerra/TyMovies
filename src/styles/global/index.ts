import { createGlobalStyle } from 'styled-components';

const ColorsCSS = createGlobalStyle`
  :root {
    --color-background: ${({ theme }) => theme.colors.background};
  }
`;
const FontsCSS = createGlobalStyle`
  :root {
    --font-primary: ${({ theme }) => theme.fonts.primary};
    --font-secondary: ${({ theme }) => theme.fonts.secondary};
  }
`;
const BorderRadiusCSS = createGlobalStyle`
  :root {
    --border-radius-sm: ${({ theme }) => theme.borderRadius.sm};
    --border-radius-xl: ${({ theme }) => theme.borderRadius.xl};
  }
`;
const RootCSS = createGlobalStyle`
  :root {
    --max-width: ${({ theme }) => theme.maxWidth};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  html.normal-scroll {
    scroll-behavior: auto;
  }
  
  body {
    padding: 0 !important;
    color: var(--color-text);
    font-family: var(--font-primary);
    background-image: linear-gradient(to left top, #240930, #20092a, #1d0923, #19081d, #140717, #110714, #0e0710, #0a070c, #09080b, #09080b, #09090a, #090909);
    .modal{
      top: 10%;
    .modal-content{
      background-color: var(--color-background);
      width: 650px;
      height: 450px;
      @media (max-width: 1024px){
        width: 100%;
        height: 300px;
      }
      .modal-header{
        border: none;
      }
    }
  }
  
  #__next{
    position: relative;
  }
   
  a {
    text-decoration: none;
  }
  
  .effect {
    background-color: rgba(0,0,0,.95);
    z-index: 9999;
  }
  .effectHead {
    background-color: rgba(20, 7, 23, 0.5) !important;
    z-index: 9999;
    backdrop-filter: blur(1px);
  }
}


  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-secondary);
  }

  .mob-visible {
    display: none;
    @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
      display: block;
    }
  }
  .tab-visible {
    display: none;
    @media (min-width: ${({ theme }) => theme.mediaQueries.minMobile}) {
      display: block;
    }
  }
  .mx-w {
    @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
      max-width: var(--max-width);
      margin: 0 auto;
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
    html {
      margin: 0 auto;
    }
  }
`;

export const GlobalStyles = {
  ColorsCSS,
  FontsCSS,
  BorderRadiusCSS,
  RootCSS,
};
