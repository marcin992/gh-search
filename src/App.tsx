import React, { HTMLProps } from 'react';
import './App.css';
import styled from 'styled-components';
import { theme } from './theme';

import { PrimaryButton, SecondaryButton } from './components/Button';
import { GlobalFonts } from './fonts/fonts';
import { GlobalStyle } from './globalStyle';
import { Input } from './components/Input';

const Container = styled.div({
  padding: '30px',
});

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Container>
        <PrimaryButton>Search</PrimaryButton>
        <SecondaryButton>I'm feeling lucky</SecondaryButton>
        <Input />
      </Container>
    </>
  );
}

export default App;
