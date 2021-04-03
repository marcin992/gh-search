import { createGlobalStyle } from 'styled-components';
import RobotoSlab from './RobotoSlab-Regular.ttf';
import Montserrat from './Montserrat-Regular.ttf';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Slab';
    src: local('Roboto Slab'), local('RobotoSlab'), url(${RobotoSlab}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), url(${Montserrat}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;
