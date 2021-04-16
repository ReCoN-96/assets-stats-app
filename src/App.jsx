import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from './routers/AppRouter';

import appTheme from './theme/AppTheme';
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <AppRouter />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
