import React from 'react';
import styled from 'styled-components';

import TotalBalance from './TotalBalance';
import AssetsDistribution from './AssetsDistribution';

const Container = styled.div`
    max-width: 1100px;
    margin: auto; 
    height: 93vh;
`;
const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.violet};
  font-size: 1.4rem;
  padding-top: 2rem;
  margin: 0;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5rem;
`;
const DashboardPage = () => (
  <Container>
    <PageTitle>DASHBOARD</PageTitle>
    <Wrapper>
      <TotalBalance />
      <AssetsDistribution />
    </Wrapper>
  </Container>
);

export default DashboardPage;
