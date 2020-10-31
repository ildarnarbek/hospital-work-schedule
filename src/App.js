import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';
import theme from './theme';
import MainPage from './components/MainPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
