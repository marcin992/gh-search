import Color from 'color';

const primary = Color('#183059');

export const theme = {
  primary: {
    100: primary.lighten(0.6).hex(),
    200: primary.lighten(0.3).hex(),
    300: primary.hex(),
    400: primary.darken(0.1).hex(),
    500: primary.darken(0.3).hex(),
  },
  gray: {
    100: '#f8f8f9',
    200: '#e6e7ec',
    300: '#dadde4',
    400: '#ced3dc',
    500: '#aab3c2',
    600: '#8693a8',
    700: '#65748c',
    800: '#3e4756',
  },
};
