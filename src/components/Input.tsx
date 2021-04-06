import styled from 'styled-components';
import { theme } from '../theme';

type InputProps = {
  fullWidth?: boolean;
};

export const Input = styled.input<InputProps>`
  background: ${theme.gray[300]};
  border: none;
  height: 43px;
  outline: none;
  border-radius: 32px;
  padding: 0 24px;
  font-size: 1em;
  font-family: Montserrat, sans-serif;
  transition: background-color 100ms ease-in-out;
  width: ${(props) => (props.fullWidth ? '100%' : 'initial')};

  &:hover {
    background: ${theme.gray[400]};
  }

  &:focus {
    background: ${theme.gray[500]};
  }
`;
