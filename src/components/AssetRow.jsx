import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const AssetRow = ({ assets }) => (
  <ItemWrapper>
    <Logo logo={assets?.image} />
    <Item>{assets?.symbol}</Item>
    <Item>{assets?.name}</Item>
    <Item>{assets?.quantity}</Item>
    <Item>{moment(assets?.entry_date).format('L')}</Item>
    <Item>{assets?.buy_price}</Item>
    <Item>
      {assets?.current_price}
      {' '}
      {'$'}
    </Item>
    <ItemVariation>
      {assets?.price_change_percentage_24h}
      {' '}
      {'%'}
    </ItemVariation>
  </ItemWrapper>
);

export default AssetRow;

const ItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 5rem;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: solid 0.1px rgb(190, 189, 188, 0.1);
`;

const Item = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.4rem;
  width: 10rem;
  text-align: center;
  text-overflow: ellipsis;
`;
const ItemVariation = styled.span`
  color: ${(props) => (
    props?.children[0] < 0
      ? 'red'
      : props.theme.colors.green
  )};
  font-size: 1.4rem;
  text-align: center;
  width: 10rem;
`;
const Logo = styled.div`
  background-image: url(${(props) => props.logo});
  background-repeat: no-repeat;
  background-size: contain;
  height: 90%;
  width: 5rem;
`;
