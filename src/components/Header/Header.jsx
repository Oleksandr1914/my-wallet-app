import Logo from '../../assets/log.png';
import { HeaderContainer, LogoImg, ConnectBlock } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt="logo" />
      <ConnectBlock>
        <span>0.654</span>
        <span>wew87q98eq</span>
      </ConnectBlock>
    </HeaderContainer>
  );
};

export default Header;
