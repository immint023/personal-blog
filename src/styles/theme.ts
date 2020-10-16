export interface ITheme {
  text: {
    primary: string;
    secondary: string;
    grey: string;
    [property: string]: string;
  };
  bg: {
    primary: string;
    secondary: string;
    [property: string]: string;
  };
}

export interface ITypography {
  fontSizes: {
    body: string;
    heading: string;
  };
  fontWeights: {
    body: number;
    heading: number;
  };
}

const darkTheme: ITheme = {
  text: {
    primary: '#f5f5f5',
    grey: '#BDBDBD',
    secondary: '#ECEFF1',
  },
  bg: {
    primary: '#121212',
    secondary: '#252525',
  },
};

const lightTheme: ITheme = {
  text: {
    primary: '#424242',
    grey: '#BDBDBD',
    secondary: '#9E9E9E',
  },
  bg: {
    primary: '#ffffff',
    secondary: '#ffffff',
  },
};

const typography: ITypography = {
  fontSizes: {
    body: '14px',
    heading: '24px',
  },
  fontWeights: {
    body: 400,
    heading: 500,
  },
};

export default {
  dark: {
    ...typography,
    ...darkTheme,
  },
  light: {
    ...typography,
    ...lightTheme,
  },
};
