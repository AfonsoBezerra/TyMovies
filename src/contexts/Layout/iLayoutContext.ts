import { iTheme } from 'types/iTheme';

export interface iLayoutContext {
  currTheme: iTheme;
  currWidth: number;
  isSpecialPage: boolean;
  isUserAdmin: boolean;
  setIsUserAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}
