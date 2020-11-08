import React, { useState } from 'react';
import Icon from './atoms/Icon';
import Input from './atoms/Input';
import Wrapper from './atoms/Wrapper';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  return (
    <Wrapper isOpen={isOpen} animate={animate}>
      <Icon onClick={() => {
        setIsOpen(true);
        setAnimate(true);
      }}
      />
      {isOpen && <Input type="search" placeholder="Buscar" onBlur={() => setIsOpen(false)} autoFocus />}
    </Wrapper>
  );
};

export default SearchBar;
