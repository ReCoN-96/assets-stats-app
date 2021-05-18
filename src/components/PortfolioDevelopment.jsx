import React from 'react';
import styled from 'styled-components';
import PortfolioDevelopmentGraph from './PortfolioDevelopmentGraph';

import useAmountRequest from '../hooks/useAmountRequest';

const Container = styled.div`
  margin-top: 6rem;
  height: 10rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.6rem;
  width: max-content;
  flex: 40%;
`;

const LegendWrapper = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
`;

const Legend = styled.div`
  align-items: center;
  display: flex;
  flex: 50%;
`;

const LegendColor = styled.div`
  width: 5rem;
  height: 0.3rem;
  background: ${(props) => props.theme.colors.violet};
`;

const LegendTitle = styled.span`
  color: ${(props) => props.theme.colors.grey};
  margin-left: 3rem;
`;

const PortfolioDevelopment = () => {
  const {
    totalAmount,
  } = useAmountRequest('/data/amount.json');
  return (
    <>
      <Container>
        <LegendWrapper>
          <Title>Portfolio evolution</Title>
          <Legend>
            <LegendColor />
            <LegendTitle>This year</LegendTitle>
          </Legend>
        </LegendWrapper>
        <PortfolioDevelopmentGraph totalAmount={totalAmount} />
      </Container>
    </>
  );
};

export default PortfolioDevelopment;
