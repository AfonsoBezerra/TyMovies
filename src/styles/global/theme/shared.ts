import type { iSharedThemeOptions } from 'types/iTheme';

export const BREAKPOINTS = {
  $MAX_MOBILE: 768,
  $MAX_TABLET: 1024,
  $MIN_TABLET: 1025,
  $MIN_MOBILE: 769,
};

export const sharedTheme: iSharedThemeOptions = {
  maxWidth: '1700px',

  fonts: {
    primary: 'Roboto, serif',
    secondary: 'Roboto, serif',
  },
  mediaQueries: {
    maxMobile: `${BREAKPOINTS.$MAX_MOBILE}px`,
    maxTablet: `${BREAKPOINTS.$MAX_TABLET}px`,
    minTablet: `${BREAKPOINTS.$MIN_TABLET}px`,
    minMobile: `${BREAKPOINTS.$MIN_MOBILE}px`,
  },
  borderRadius: {
    sm: '0.25rem',
    xl: '2rem',
  },
};
