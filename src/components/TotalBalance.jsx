import React from 'react';
import styled from 'styled-components';

import TotalAmount from './TotalAmount';
import TotalAmountVariationDay from './TotalAmountVariationDay';

import useAmountRequest from '../hooks/useAmountRequest';

const Container = styled.div`
  width: 20rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.6rem;
  margin: 0 0 3rem 0;
`;

const TotalBalance = () => {
  const {
    accountBalanceYesterday,
    accountBalanceToday,
    variation,
  } = useAmountRequest('/data/amount.json');
  return (
    <Container>
      <Title>Solde Total</Title>
      <TotalAmount accountBalanceToday={`${accountBalanceToday} $`} />
      <TotalAmountVariationDay
        variation={variation}
        accountBalanceYesterday={accountBalanceYesterday}
        accountBalanceToday={accountBalanceToday}
      />
    </Container>
  );
};

export default TotalBalance;
