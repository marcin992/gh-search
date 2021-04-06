import React, { HTMLProps } from 'react';
import './App.css';
import styled from 'styled-components';
import { theme } from './theme';
import { Router } from '@reach/router';
import { Main } from './pages/main/Main';
import { Results } from './pages/results/Results';

import { PrimaryButton, SecondaryButton } from './components/Button';
import { Input } from './components/Input';
import { callbackify } from 'node:util';

const Container = styled.div`
  /* height: 100vh; */
  /* width: 100vw; */
`;

function App() {
  return (
    <Router>
      <Main path='/' />
      <Results path='/search' />
    </Router>
  );
}

export default App;
