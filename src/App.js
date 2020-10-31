import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import logo from './logo.svg';
import './App.css';
import theme from './theme';
import MainPage from './components/MainPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
