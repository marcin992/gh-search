import styled from 'styled-components';

import { theme } from '../theme';

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  padding: 8px 24px;
  height: 43px;
  border: none;
  border-radius: 32px;

  color: white;
  font-size: 1em;
  font-weight: 400;
  cursor: pointer;
  min-width: 150px;
  outline: none;
  transition: background-color 100ms ease-in-out;

  &:focus {
    background: ${theme.primary[100]};
    color: white;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${theme.primary[300]};
  &:hover {
    background: ${theme.primary[100]};
  }

  &:active {
    background: ${theme.primary[400]};
    outline: none;
  }
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid ${theme.primary[300]};
  color: ${theme.primary[300]};
  background: none;

  &:hover {
    background: ${theme.primary[100]};
    color: white;
  }
  &:active {
    background: ${theme.primary[400]};
    outline: none;
  }
`;
