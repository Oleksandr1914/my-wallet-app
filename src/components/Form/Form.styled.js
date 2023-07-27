import styled from 'styled-components';
import { device } from '../../utils/mixins';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  margin: 80px auto;
  width: 100%;
  height: 340px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  ${device.tablet} {
    padding-top: 20px;
    width: 480px;
    height: 360px;
  }
  ${device.desktop} {
    width: 600px;
    height: 420px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  color: #e2e8f0;
  ${device.desktop} {
    font-weight: 600;
    font-size: 32px;
    line-height: 1.4;
  }
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextLabel = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  color: #e2e8f0;
  ${device.tablet} {
    font-size: 20px;
    line-height: 1.3;
  }
  ${device.desktop} {
    font-size: 24px;
    line-height: 1.4;
  }
`;

export const Input = styled.input`
  padding: 4px 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  background-color: #f3f3f3;
  border-radius: 8px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${device.mobile} {
    padding: 6px 8px;
  }
  ${device.tablet} {
    padding: 8px 10px;
    font-size: 18px;
  }
  ${device.desktop} {
    font-size: 22px;
  }
`;

export const ButtonForm = styled.button`
  margin-top: 25px;
  color: #e2e8f0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  background-color: #c27202;
`;
