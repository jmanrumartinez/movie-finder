import React from 'react';
import Logo from './atoms/Logo';
import Nav from './atoms/Nav';
import SearchBar from './atoms/SearchBar';

const NavBar = () => (
  <Nav>
    <Logo>Movie Finder</Logo>
    <SearchBar />
  </Nav>
);

export default NavBar;
