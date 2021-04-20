import React from 'react';
import styled from 'styled-components';

import AssetRow from './AssetRow';

const Container = styled.div`
  margin-top: 5rem;
  width: 100%
`;

const AssetsTable = () => <Container><AssetRow /></Container>;

export default AssetsTable;
