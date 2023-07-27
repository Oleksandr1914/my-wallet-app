import { useEffect, useState } from 'react';
import {
  ButtonForm,
  FormBox,
  FormContainer,
  Input,
  Label,
  TextLabel,
  Title,
} from './Form.styled';
import { useEthersContext } from '../../hook/useEthersContext';
import { formatEther, parseEther, parseUnits } from 'ethers';

const Form = () => {
  const { signer } = useEthersContext();
  const [receiverAddress, setReceiverAddress] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');

  const handleTransfer = async e => {
    e.preventDefault();
    console.log(receiverAddress, tokenAmount);
    setReceiverAddress('');
    setTokenAmount('');
    try {
      const tx = await signer.sendTransaction({
        to: receiverAddress,
        value: parseEther(tokenAmount),
      });

      // Often you may wish to wait until the transaction is mined
      const receipt = await tx.wait();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(signer);
  }, [signer]);

  return (
    <FormContainer>
      <Title>Transport token</Title>

      <FormBox>
        <Label>
          <TextLabel>Receiver Address:</TextLabel>
          <Input
            type="text"
            placeholder="Receiver Address"
            value={receiverAddress}
            onChange={e => setReceiverAddress(e.target.value)}
          />
        </Label>
        <Label>
          <TextLabel>Token Amount:</TextLabel>
          <Input
            type="number"
            placeholder="Token Amount"
            value={tokenAmount}
            onChange={e => setTokenAmount(e.target.value)}
          />
        </Label>
        <ButtonForm onClick={e => handleTransfer(e)}>Transfer</ButtonForm>
      </FormBox>
    </FormContainer>
  );
};

export default Form;
