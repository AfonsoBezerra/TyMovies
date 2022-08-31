import { createGlobalStyle } from 'styled-components';

const ColorsCSS = createGlobalStyle`
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-text: ${({ theme }) => theme.colors.text};
    --color-background: ${({ theme }) => theme.colors.background};
    --color-shadow: ${({ theme }) => theme.colors.shadow};
    --color-error: ${({ theme }) => theme.colors.error};
    --color-footer-bottom: ${({ theme }) => theme.colors.footerBottom};
    --color-document-text-background: ${({ theme }) =>
      theme.colors.documentTextBackground};
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
  body {
    padding: 0 !important;
    color: var(--color-text);
    font-family: var(--font-primary);
    background-color: rgba(0,0,0, 90%);
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
