/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';

import AssetRow from './AssetRow';
import { DataContext, DataProvider } from '../contexts/DataContext';
import { REQUEST_STATUS } from '../reducers/request';

const AssetsTableComponent = () => {
  const {
    records: assets, status, error,
  } = useContext(DataContext);

  const isLoading = status === REQUEST_STATUS.LOADING;

  return isLoading ? (<Loading />) : (
    <AssetsContainer>
      <ItemWrapper>
        <Item>Symbol</Item>
        <Item>Name</Item>
        <Item>Quantity</Item>
        <Item>Entry date</Item>
        <Item>Buy price</Item>
        <Item>Actual price</Item>
        <Item>Variation/24h</Item>
      </ItemWrapper>
      {assets.map((data) => <AssetRow key={data.id} assets={data} />)}
    </AssetsContainer>
  );
};

const AssetsTable = (props) => (
  <DataProvider
    baseUrl="https://api.coingecko.com/api/v3"
    routeName="/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    params={props.params}
  >
    <AssetsTableComponent {...props} />
  </DataProvider>
);

export default AssetsTable;

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

const Loading = styled.div`
  background-image: url('https://i.gifer.com/xv.gif');
  background-size: contain;
  background-repeat: no-repeat;
  height: 70%;
  width: 70%;
`;
