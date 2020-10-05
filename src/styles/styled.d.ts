import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
    };
    fontSizes: {
      small: string;
      med: string;
    };
  }
}
