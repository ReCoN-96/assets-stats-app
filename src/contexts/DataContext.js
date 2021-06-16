import React, { createContext } from 'react';
import useRequestWithParams from '../hooks/useRequestWithParams';

const DataContext = createContext();

// eslint-disable-next-line object-curly-newline
const DataProvider = ({ children, baseUrl, routeName, params }) => {
  const state = useRequestWithParams(baseUrl, routeName, params);
  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
