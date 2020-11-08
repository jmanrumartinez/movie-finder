import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './modules/common/Container';
import { SearchValueProvider } from './modules/common/Context/SearchValueContext';
import GlobalStyle from './modules/common/GlobalStyle';
import NavBar from './modules/common/NavBar';
import useSearchMovie from './modules/Movies/Hooks/useSearchMovie';
import MovieList from './modules/Movies/MovieList';
import GenreEnum from './utils/enums/GenreEnum';

const mainTheme = {
  mainColor: '#1a252f',
  secondaryColor: '#11181f',
};

function App() {
  const [searchValue, setSearchValue] = useState('');
  useSearchMovie(searchValue);

  return (
    <ThemeProvider theme={mainTheme}>
      <SearchValueProvider value={{ searchValue, setSearchValue }}>
        <GlobalStyle />
        <NavBar />
        <Container>
          <MovieList genre={GenreEnum.Horror} title="Novedades de Terror" />
          <MovieList genre={GenreEnum.Comedy} title="Novedades de Comedia" />
          <MovieList genre={GenreEnum.Fantasy} title="Novedades de Fantasia" />
          <MovieList genre={GenreEnum.Adventure} title="Novedades de Aventura" />
        </Container>
      </SearchValueProvider>
    </ThemeProvider>
  );
}

export default App;
