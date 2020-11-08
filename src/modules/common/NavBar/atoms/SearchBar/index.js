import React, { useContext, useState } from 'react';
import { SearchValueContext } from '../../../Context/SearchValueContext';
import Icon from './atoms/Icon';
import Input from './atoms/Input';
import Wrapper from './atoms/Wrapper';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [searchValue, setSearchValue] = useContext(SearchValueContext);

  return (
    <Wrapper isOpen={isOpen} animate={animate}>
      <Icon onClick={() => {
        setIsOpen(true);
        setAnimate(true);
      }}
      />
      {isOpen && (
      <Input
        type="search"
        placeholder="Buscar"
        onBlur={() => setIsOpen(false)}
        autoFocus
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      )}
    </Wrapper>
  );
};

export default SearchBar;
