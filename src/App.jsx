import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';

import appTheme from './theme/AppTheme';
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Header />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
