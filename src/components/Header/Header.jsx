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

import React from 'react';

const Header = () => {
  const checkMetaMaskInstalled = () => {
    return typeof window.ethereum !== 'undefined';
  };

  const connectWallet = async () => {
    if (!checkMetaMaskInstalled()) {
      alert(
        'MetaMask not installed on your device. Please install MetaMask to connect your wallet.'
      );
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      alert('Successfully connected to MetaMask!');
      console.log('Connected Wallet Address:', accounts[0]);
    } catch (error) {
      console.log('Error connecting to MetaMask:', error.message);
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default Header;
