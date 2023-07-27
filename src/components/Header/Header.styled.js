import styled from 'styled-components';
import { device } from '../../utils/mixins';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 120px;
  height: 30px;
  ${device.mobile} {
    width: 160px;
    height: 40px;
  }
  ${device.tablet} {
    width: 200px;
    height: 50px;
  }
  ${device.desktop} {
    width: 240px;
  }
`;

export const ConnectBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 6px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  ${device.mobile} {
    padding: 4px 8px;
  }
  ${device.tablet} {
    padding: 4px 12px;
  }
  & button {
    padding: 4px 6px;
    color: #e2e8f0;
    background-color: transparent;
  }
`;

export const TextContent = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: #e2e8f0;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 40px;
  width: 100%;
`;

export const TextModal = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  color: #000000;
  & a {
    color: #0453f6;
  }
`;

export const ButtonModal = styled.button`
  margin-top: 50px;
  color: #000000;
  background-color: #f19c5e;
`;
