import styled from 'styled-components';
import Back from '../../assets/background.png';
import { device } from '../../utils/mixins';

export const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
