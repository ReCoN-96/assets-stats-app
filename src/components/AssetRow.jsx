import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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
    (props.children && props.children.substring(0, props.children.length - 1) * 1) < 0
      ? 'red'
      : props.theme.colors.green
  )};
  font-size: 1.4rem;
  text-align: center;
  width: 10rem;
`;
const Logo = styled.div`
  background-image: url(${(props) => props.logo});
  background-size: contain;
  height: 100%;
  width: 5rem;
`;
const AssetRow = ({ assets }) => (
  <ItemWrapper>
    <Logo logo={assets?.logo} />
    <Item>{assets?.id}</Item>
    <Item>{assets?.name}</Item>
    <Item>{assets?.quantity}</Item>
    <Item>{moment(assets?.entry_date).format('L')}</Item>
    <Item>{assets?.buy_price}</Item>
    <Item>{assets?.actual_price}</Item>
    <ItemVariation>{assets?.variation}</ItemVariation>
  </ItemWrapper>
);

export default AssetRow;
