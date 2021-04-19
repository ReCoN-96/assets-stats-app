import React from 'react';
import styled from 'styled-components';

import AssetsDistributionItem from './AssetsDistributionItem';

const Container = styled.ul`
  width: 36rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

const AssetsDistributionList = ({ sortedAssets } = []) => (
  <Container>
    {sortedAssets && sortedAssets.slice(0, 5).map(({
      name, id, part,
    }) => (
      <AssetsDistributionItem
        key={id}
        name={name}
        id={id}
        part={part}
      />
    ))}
    <AssetsDistributionItem
      key="other"
      name="Other"
      part={(100
        - sortedAssets.slice(0, 5)
          .map(({ part }) => Number(part))
          .reduce((acc, value) => acc + value, 0))
        .toFixed(2)}
    />
  </Container>
);

export default AssetsDistributionList;
