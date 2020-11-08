import React, { createContext } from 'react';

export const SearchValueContext = createContext();

// eslint-disable-next-line react/prop-types
export const SearchValueProvider = ({ value, children }) => (
  <SearchValueContext.Provider value={value}>
    {children}
  </SearchValueContext.Provider>
);
