import React from 'react';
import styled from 'styled-components';

import useAssetsRequest from '../hooks/useAssetsRequest';
import AssetsDistributionList from './AssetsDistributionList';

const Container = styled.div`

`;

const AssetsDistribution = () => {
  const assets = useAssetsRequest();
  const sortedAssets = [...assets].sort(
    (a, b) => a.quantity * a.actual_price - b.quantity * b.actual_price,
  ).reverse();
  return (
    <Container>
      <AssetsDistributionList sortedAssets={sortedAssets} />
    </Container>
  );
};

export default AssetsDistribution;
