import React from 'react';
import styled from 'styled-components';
import PortfolioDevelopmentGraph from './PortfolioDevelopmentGraph';

import useAmountRequest from '../hooks/useAmountRequest';

const Container = styled.div`
  height: 10rem;
`;

const PortfolioDevelopment = () => {
  const {
    totalAmount,
  } = useAmountRequest();
  return (
    <Container>
      <PortfolioDevelopmentGraph totalAmount={totalAmount} />
    </Container>
  );
};

export default PortfolioDevelopment;
