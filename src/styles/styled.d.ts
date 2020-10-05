import 'styled-components';
import { ITheme, ITypography } from './theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme, ITypography {}
}
