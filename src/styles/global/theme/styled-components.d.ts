import type { iTheme } from 'types/iTheme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends iTheme {}
}
