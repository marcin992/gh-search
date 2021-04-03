import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    background-color: ${theme.gray[100]};
  }
`;
