import Logo from '../../assets/log.png';
import {
  HeaderContainer,
  TextContent,
  LogoImg,
  ConnectBlock,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt="logo" />
      <ConnectBlock>
        <TextContent>0.654</TextContent>
        <TextContent>we7q98eq</TextContent>
      </ConnectBlock>
    </HeaderContainer>
  );
};

export default Header;
