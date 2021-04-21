import React from 'react';
import styled from 'styled-components';

import useAssetsRequest from '../hooks/useAssetsRequest';
import AssetsDistributionGraph from './AssetsDistributionGraph';
import AssetsDistributionList from './AssetsDistributionList';

const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  flex: 100%;
  font-size: 1.6rem;
  margin: 0 0 3rem 0;
  padding-left: 13rem;
`;
const Container = styled.div`
  align-items:center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const AssetsDistribution = () => {
  const [assets] = useAssetsRequest('/data/assets.json');
  const sortedAssets = assets.sort(
    (a, b) => a.quantity * a.actual_price - b.quantity * b.actual_price,
  ).reverse();
  return (
    <Container>
      <Title>Repartition</Title>
      <AssetsDistributionGraph sortedAssets={sortedAssets} />
      <AssetsDistributionList sortedAssets={sortedAssets} />
    </Container>
  );
};

export default AssetsDistribution;
