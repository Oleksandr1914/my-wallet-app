import Logo from '../../assets/log.png';
import {
  HeaderContainer,
  TextContent,
  LogoImg,
  ConnectBlock,
} from './Header.styled';
import { ethers, formatEther } from 'ethers';
import { useEthersContext } from '../../hook/useEthersContext';
import { useEffect, useState } from 'react';

const Header = () => {
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const { setSigner } = useEthersContext();

  const connectWallet = async () => {
    if (window.ethereum == null) {
      console.log('MetaMask not installed; using read-only defaults');
      const provider = ethers.getDefaultProvider();
    } else {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const balance = await provider.getBalance(accounts[0]);
      setAccounts(accounts);
      setBalance(formatEther(balance));
      console.log({ accounts, balance });
      const signer = await provider.getSigner();
      setSigner(signer);
      setData(accounts);
    }
  };
  useEffect(() => {
    console.log(data.length);
  }, [data]);
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt="logo" />

      <ConnectBlock>
        {data.length === 0 ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <>
            <TextContent>{balance && balance}</TextContent>
            <TextContent>{accounts && accounts}</TextContent>
          </>
        )}
      </ConnectBlock>
    </HeaderContainer>
  );
};

export default Header;
