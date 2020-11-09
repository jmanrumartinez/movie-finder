import React, { useContext, useReducer } from 'react';
import { SearchValueContext } from '../../../Context/SearchValueContext';
import Icon from './atoms/Icon';
import Input from './atoms/Input';
import Wrapper from './atoms/Wrapper';

const searchBarReducer = (state, action) => {
  switch (action.type) {
    case 'CLICK_ICON':
      return { isOpen: true, animate: true };
    case 'ON_BLUR':
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

const SearchBar = () => {
  const [state, dispatch] = useReducer(searchBarReducer, {
    isOpen: false,
    animate: false,
  });
  const [searchValue, setSearchValue] = useContext(SearchValueContext);
  const { isOpen, animate } = state;

  return (
    <Wrapper isOpen={isOpen} animate={animate}>
      <Icon onClick={() => {
        dispatch({ type: 'CLICK_ICON' });
      }}
      />
      {isOpen && (
      <Input
        type="search"
        placeholder="Buscar"
        onBlur={() => dispatch({ type: 'ON_BLUR' })}
        autoFocus
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      )}
    </Wrapper>
  );
};

export default SearchBar;
