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
    background: linear-gradient(305deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,1) 100%);
    .modal{
      top: 10%;
    .modal-content{
      background-color: var(--color-background);
      .modal-header{
        border: none;
      }
    }
  }
  .effect {
    background-color: rgba(0,0,0, 90%);
    height: 55px;
    padding: 0.1rem 1rem 0 1rem;
    a{
      width: 41px;
      height: 48px;
    }
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
