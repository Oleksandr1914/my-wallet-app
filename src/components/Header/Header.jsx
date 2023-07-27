import Logo from '../../assets/log.png';
import {
  HeaderContainer,
  TextContent,
  LogoImg,
  ConnectBlock,
  ModalContainer,
  TextModal,
  ButtonModal,
} from './Header.styled';
import { ethers, formatEther, parseEther } from 'ethers';
import { useEthersContext } from '../../hook/useEthersContext';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { formatNumberBalance, reformatString } from '../../hoc/formating';

const Header = () => {
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setSigner } = useEthersContext();

  const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);

  const showInstallMetaMaskMessage = () => {
    setModalIsOpen(true);
  };

  const connectWallet = async () => {
    if (window.ethereum == null) {
      alert('MetaMask not installed');
      showInstallMetaMaskMessage();
      const provider = ethers.getDefaultProvider();
    } else {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const balance = await provider.getBalance(accounts[0]);
      const number = formatEther(balance);
      const formattedNumber = formatNumberBalance(number);
      const string = reformatString(accounts[0]);
      setAccounts(string);
      setBalance(formattedNumber);
      const signer = await provider.getSigner();
      setSigner(signer);
      setData(accounts);
    }
  };

  useEffect(() => {
    if (isMobileDevice && window.ethereum == null) {
      showInstallMetaMaskMessage();
    }
  }, []);

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Install MetaMask Modal"
      >
        <ModalContainer>
          <TextModal>
            Please install MetaMask from the App Store (iOS) or Google Play
            Store (Android) to connect your wallet.
          </TextModal>
          <TextModal>
            <a
              href="https://apps.apple.com/ua/developer/metamask/id1438144201"
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              App Store (iOS)
            </a>
          </TextModal>
          <TextModal>
            <a
              href="https://play.google.com/store/apps/details?id=io.metamask&hl=ru&gl=US"
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              Google Play Store (Android)
            </a>
          </TextModal>
          <ButtonModal onClick={() => setModalIsOpen(false)}>Close</ButtonModal>
        </ModalContainer>
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
