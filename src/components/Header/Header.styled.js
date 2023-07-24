import styled from 'styled-components';
import { device } from '../../utils/mixins';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 120px;
  ${device.mobile} {
    width: 160px;
  }
  ${device.tablet} {
    width: 200px;
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
  padding: 2px 4px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  ${device.mobile} {
    padding: 4px 8px;
  }
  ${device.tablet} {
    padding: 4px 12px;
  }
`;

export const TextContent = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: #e2e8f0;
`;
