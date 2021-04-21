/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import AssetRow from './AssetRow';

const AssetsContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
`;

const ItemWrapper = styled.div`
  align-items: center;
  border-bottom: solid 0.1px rgb(190, 189, 188, 0.1);
  display: flex;
  flex-direction: row;
  height: 5rem;
  justify-content: space-evenly;
  padding-left: 8.9rem;
  width: 100%;
`;

const Item = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  text-align: center;
  text-overflow: ellipsis;
  width: 10rem;
`;

const AssetsTable = ({ assets }) => (
  <AssetsContainer>
    <ItemWrapper>
      <Item>Id</Item>
      <Item>Name</Item>
      <Item>Quantity</Item>
      <Item>Entry date</Item>
      <Item>Buy price</Item>
      <Item>Actual price</Item>
      <Item>Variation/24h</Item>
    </ItemWrapper>
    {assets && assets.map((data) => <AssetRow key={data.id} assets={data} />)}
  </AssetsContainer>
);

export default AssetsTable;
