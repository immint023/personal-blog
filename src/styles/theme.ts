export interface ITheme {
  text: {
    primary: string;
    [property: string]: string;
  };
  bg: {
    primary: string;
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
  },
  bg: {
    primary: '#262626',
  },
};
const lightTheme: ITheme = {
  text: {
    primary: '#424242',
  },
  bg: {
    primary: '#ffffff',
  },
};

const typography: ITypography = {
  fontSizes: {
    body: '12px',
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
