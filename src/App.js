import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './modules/common/GlobalStyle';
import NavBar from './modules/common/NavBar';

const mainTheme = {
  mainColor: '#1a252f',
  secondaryColor: '#11181f',
};

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>
  );
}
export default App;
