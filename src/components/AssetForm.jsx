/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const possibleAssets = [
  {
    id: 'ETH',
    name: 'Etherum',
    logo: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png',
  },
  {
    id: 'USDCOIN',
    name: 'USD Coin',
    logo: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png',
  },
  {
    id: 'AAVE',
    name: 'Aave',
    logo: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png',
  },
  {
    id: 'DASH',
    name: 'Dash',
    logo: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png',
  },
  {
    id: 'ELROND',
    name: 'Elrond',
    logo: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png',
  },
];

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60rem;
  justify-content: space-between;
  padding: 5rem 10rem;
`;
const Input = styled.input`
  background-color: ${(props) => props.theme.colors.grey};
  border: none;
  border-radius: 4rem;
  color: ${(props) => props.theme.colors.white};
  height: 4.5rem;
  padding-left: 2rem;
  outline:none;
  appearance: none;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.white};
  padding: 2rem;
  font-weight: 600;
`;

const LongInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MediumInputWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const TwoMediumWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Select = styled.select`
  background-color: ${(props) => props.theme.colors.grey};
  border: none;
  border-radius: 4rem;
  color: ${(props) => props.theme.colors.white};
  height: 4.5rem;
  padding: 0 2rem;
  appearance: none;
  outline: none;
`;
const Option = styled.option`
  padding: 0 2rem;
`;
const Button = styled.button`
  background: ${(props) => props.theme.colors.violet};
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  height: 5rem;
  width: 15rem;
  border-radius: 40px;
  margin-top: 2rem;
`;
const Error = styled.span`
  padding: 1rem 2rem;
  color: red;
  font-size: 1.4rem;
`;
const AssetForm = (props) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      id: 'ETH',
      quantity: 1,
      entry_date: moment().format('L'),
      buy_price: '',
      actual_price: 410,
      variation: 0,
    },
  });

  const onSubmit = (data) => {
    const information = possibleAssets.filter(({ id }) => id === data.id);
    const computedData = { ...data, ...information[0] };
    props.onSubmit((assetsArray) => [computedData, ...assetsArray]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LongInputWrapper>
        <Label>
          Search for an asset to add
        </Label>
        <Select defaultValue="id" {...register('id')}>
          {possibleAssets && possibleAssets.map((data) => (
            <Option key={data.id} value={data.id}>
              {data.name}
            </Option>
          ))}
        </Select>
      </LongInputWrapper>
      <TwoMediumWrapper>
        <MediumInputWrapper>
          <Label>Entry Date</Label>
          <Input defaultValue="entry_date" {...register('entry_date', { required: 'you must provide a date', validate: (value) => (moment(value, 'L', true).isValid() ? true : 'Format Date must be MM/JJ/YYYY') })} />
          <ErrorMessage
            errors={errors}
            name="entry_date"
            render={({ message }) => <Error>{message}</Error>}
          />
        </MediumInputWrapper>
        <MediumInputWrapper>
          <Label>Quantity</Label>
          <Input type="text" defaultValue="quantity" {...register('quantity', { required: 'You must provide a Quantity', min: 1 })} />
          <ErrorMessage
            errors={errors}
            name="quantity"
            render={({ message }) => <Error>{message}</Error>}
          />
        </MediumInputWrapper>
      </TwoMediumWrapper>
      <LongInputWrapper>
        <Label>Buy price</Label>
        <Input type="text" placeholder="0" {...register('buy_price', { required: 'You must provide an Amount', min: 1 })} />
        <ErrorMessage
          errors={errors}
          name="buy_price"
          render={({ message }) => <Error>{message}</Error>}
        />
      </LongInputWrapper>
      <Button type="submit">Add Assets</Button>
    </Form>
  );
};

export default AssetForm;
