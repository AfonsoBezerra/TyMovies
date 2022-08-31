export interface iSharedThemeOptions {
  maxWidth: string;

  fonts: {
    primary: string;
    secondary: string;
  };
  mediaQueries: {
    maxMobile: string;
    maxTablet: string;
    minTablet: string;
    minMobile: string;
  };
  borderRadius: {
    sm: string;
    xl: string;
  };
}

export interface iTheme extends iSharedThemeOptions {
  name: 'default';

  colors: {
    background: string;
  };
}
