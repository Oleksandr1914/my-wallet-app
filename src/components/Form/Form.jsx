import { useEffect, useState } from 'react';
import {
  ButtonForm,
  ErrorForm,
  FormBox,
  FormContainer,
  Input,
  Label,
  SpinerContainer,
  TextLabel,
  Title,
} from './Form.styled';
import { useEthersContext } from '../../hook/useEthersContext';
import { parseEther } from 'ethers';
import { ThreeCircles } from 'react-loader-spinner';
import { useFormik } from 'formik';

const Form = () => {
  const { signer } = useEthersContext();
  const [loader, setLoader] = useState(false);

  const handleTransfer = async (token, address) => {
    setLoader(true);
    try {
      const tx = await signer.sendTransaction({
        to: address,
        value: parseEther(token),
      });

      const receipt = await tx.wait();
      if (receipt) {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      console.error(error);
    }
  };

  const validate = values => {
    const errors = {};
    const minValue = 0.000001;
    if (!values.token) {
      errors.token = 'Required';
    } else if (values.token < minValue) {
      errors.token = 'Very small number!!';
    }

    if (!values.address) {
      errors.address = 'Required';
    } else if (!/^[0][x][0-9A-Fa-f]{40}$/.test(values.address)) {
      errors.address = 'Invalid Receiver Address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      address: '',
      token: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const string = String(values.token);
      handleTransfer(string, values.address);
      resetForm();
    },
  });

  return (
    <FormContainer>
      <Title>Transport token</Title>

      <FormBox onSubmit={formik.handleSubmit}>
        <Label htmlFor="address">
          <TextLabel>Receiver Address:</TextLabel>
          <Input
            name="address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address ? (
            <ErrorForm>{formik.errors.address}</ErrorForm>
          ) : null}
        </Label>
        <Label>
          <TextLabel htmlFor="token">Token Amount:</TextLabel>
          <Input
            name="token"
            type="number"
            value={formik.values.token}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.token && formik.errors.token ? (
            <ErrorForm>{formik.errors.token}</ErrorForm>
          ) : null}
        </Label>
        {loader ? (
          <SpinerContainer>
            <ThreeCircles
              height="50"
              width="50"
              color="#c27202"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </SpinerContainer>
        ) : (
          <ButtonForm type="submit">Transfer</ButtonForm>
        )}
      </FormBox>
    </FormContainer>
  );
};

export default Form;
