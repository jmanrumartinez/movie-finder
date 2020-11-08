import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './modules/common/Container';
import GlobalStyle from './modules/common/GlobalStyle';
import NavBar from './modules/common/NavBar';
import Item from './modules/Movies/Item';
import List from './modules/Movies/List';

const mainTheme = {
  mainColor: '#1a252f',
  secondaryColor: '#11181f',
};

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <NavBar />
      <Container>
        <List title="Novedades">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </List>
        <List title="Novedades">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </List>
      </Container>
    </ThemeProvider>
  );
}
export default App;
