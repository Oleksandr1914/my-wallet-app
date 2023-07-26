import { createContext, useState } from 'react';

export const EthersContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [signer, setSigner] = useState(null);

  const value = {
    signer,
    setSigner,
  };

  return (
    <EthersContext.Provider value={value}>{children}</EthersContext.Provider>
  );
};

export default ContextProvider;
