import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './modules/common/Container';
import { SearchValueProvider } from './modules/common/Context/SearchValueContext';
import GlobalStyle from './modules/common/GlobalStyle';
import NavBar from './modules/common/NavBar';
import useSearchMovie from './modules/Hooks/useSearchMovie';
import ComedyList from './modules/Movies/ComedyList';
import TerrorList from './modules/Movies/TerrorList';
import FantasyList from './modules/Movies/FantasyList';
import AdventureList from './modules/Movies/AdventureList';

const mainTheme = {
  mainColor: '#1a252f',
  secondaryColor: '#11181f',
};

function App() {
  const [searchValue, setSearchValue] = useState();
  useSearchMovie(searchValue);

  return (
    <ThemeProvider theme={mainTheme}>
      <SearchValueProvider value={[searchValue, setSearchValue]}>
        <GlobalStyle />
        <NavBar />
        <Container>
          <TerrorList />
          <ComedyList />
          <FantasyList />
          <AdventureList />
        </Container>
      </SearchValueProvider>
    </ThemeProvider>
  );
}
export default App;
