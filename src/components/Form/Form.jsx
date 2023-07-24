import {
  FormBox,
  FormContainer,
  Input,
  Label,
  TextLabel,
  Title,
} from './Form.styled';

const Form = () => {
  return (
    <FormContainer>
      <Title>Connect to wallet</Title>
      <FormBox>
        <Label>
          <TextLabel>Wallet address:</TextLabel>
          <Input type="text" name="token" />
        </Label>
        <Label>
          <TextLabel>Balans:</TextLabel>
          <Input type="number" name="balans" />
        </Label>
      </FormBox>
    </FormContainer>
  );
};

export default Form;
