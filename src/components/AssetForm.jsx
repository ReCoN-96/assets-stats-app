import React, { useState } from 'react';
import styled from 'styled-components';

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
`;
const Input = styled.input``;
const Select = styled.select``;
const Option = styled.option``;

const AssetForm = (props) => {
  const [state, setState] = useState({
    id: '',
    name: '',
    quantity: 0,
    entry_date: '2021-04-13T11:32:31.915000+02:00',
    buy_price: 0,
    actual_price: 410,
    variation: 0,
    logo: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (state.id.length) {
      props.onSubmit((assetsArray) => [state, ...assetsArray]);
    }
  };

  const onQuantityChange = (e) => {
    const quantity = e.target.value;
    setState((prevState) => ({ ...prevState, quantity }));
  };

  const onSelectedOptionChange = (e) => {
    const data = JSON.parse(e.target.value);
    setState((prevState) => ({ ...prevState, ...data }));
  };
  return (
    <Form onSubmit={onSubmit}>
      <Select onChange={onSelectedOptionChange}>
        {possibleAssets && possibleAssets.map((data) => (
          <Option key={data.id} value={JSON.stringify(data)}>
            {data.name}
          </Option>
        ))}
      </Select>
      <Input type="text" placeHolder="Quantity" value={state.quantity} onChange={onQuantityChange} />
      <Input />
      <button type="submit">Add Assets</button>
    </Form>
  );
};

export default AssetForm;
