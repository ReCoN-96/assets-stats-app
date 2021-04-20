import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center,
`;

const Total = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 4.2rem;
  word-wrap: break-word;
  width: 16rem;
`;

const TotalText = styled.span`
  color: ${(props) => props.theme.colors.grey};
  padding-left: 1rem;
`;
const TotalAmount = ({ accountBalanceToday }) => {
  const numberWithSpaces = accountBalanceToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return (
    <Wrapper>
      <Total>{numberWithSpaces}</Total>
      <TotalText>Total</TotalText>
    </Wrapper>
  );
};

export default TotalAmount;
