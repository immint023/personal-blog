type ColorType = {
  [property: string]: string;
};

const darkColors: ColorType = {
  primary: 'red',
  background: '#fafafa',
};
const lightColors: ColorType = {};

const fontSizes = {
  small: '12px',
  med: '24px',
};

export default {
  dark: {
    colors: darkColors,
    fontSizes,
  },
  light: {
    colors: lightColors,
    fontSizes,
  },
};
