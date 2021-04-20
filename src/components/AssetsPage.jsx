import React from 'react';
import styled from 'styled-components';

import AssetsTable from './AssetsTable';

const Container = styled.div`
    max-width: 1100px;
    margin: auto; 
    height: 93vh;
`;

const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.violet};
  font-size: 1.4rem;
  padding-top: 2rem;
  margin: 0 0 0 1.4rem;
 
`;

const AssetsPage = () => (
  <Container>
    <PageTitle>ASSETS</PageTitle>
    <AssetsTable />
  </Container>
);

export default AssetsPage;
