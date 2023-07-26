import { useContext } from 'react';
import { EthersContext } from '../hoc/ContextProvide';

export function useEthersContext() {
  return useContext(EthersContext);
}
