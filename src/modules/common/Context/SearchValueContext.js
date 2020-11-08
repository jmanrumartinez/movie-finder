import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const SearchValueContext = createContext();

export const SearchValueProvider = ({ value, children }) => (
  <SearchValueContext.Provider value={[value.searchValue, value.setSearchValue]}>
    {children}
  </SearchValueContext.Provider>
);

SearchValueProvider.propTypes = {
  value: PropTypes.shape({
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func.isRequired,
  }).isRequired,
};
