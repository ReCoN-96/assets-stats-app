import React, { useState } from 'react';
import styled from 'styled-components';

import AssetsTable from './AssetsTable';
import AssetsModal from './AssetsModal';

const ButtonPlus = ({ onClick }) => (
  <Button onClick={onClick}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7498 3C12.1295 3 12.4434 3.28201 12.4931 3.64808L12.5 3.74985L12.5012 11H19.7543C20.1685 11 20.5043 11.3358 20.5043 11.75C20.5043 12.1297 20.2221 12.4435 19.8561 12.4932L19.7543 12.5H12.5012L12.5032 19.7491C12.5033 20.1633 12.1676 20.4993 11.7534 20.4993C11.3737 20.4993 11.0598 20.2173 11.0101 19.8512L11.0032 19.7494L11.0012 12.5H3.7522C3.33798 12.5 3.0022 12.1642 3.0022 11.75C3.0022 11.3703 3.28435 11.0565 3.65043 11.0068L3.7522 11H11.0012L11 3.75015C10.9999 3.33594 11.3356 3 11.7498 3Z"
        fill="#FCFCFC"
      />
    </svg>
  </Button>
);

const AssetsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [market, setMarket] = useState({ ids: 'bitcoin' });
  return (
    <Container>
      <PageTitle>ASSETS</PageTitle>
      <DescriptionContainer>
        <Title>Tracking of your assets</Title>
        <ButtonPlus onClick={toggleModal} />
        <Description>
          Tracker allows you to get live access to the price movements of all
          popular stocks, cryptocurrencies, Etfs, indices, mutual
          funds, bonds, futures, and options. Follow your favourites and get
          notified when a significant change has happened for an asset you
          follow. No delays,always in the know. A clear overview of your total
          portfolio balance,profit & loss during various time periods.
        </Description>
      </DescriptionContainer>
      <AssetsTable params={market} />
      <AssetsModal isOpen={isOpen} toggleModal={toggleModal} setMarket={setMarket} />
    </Container>
  );
};

export default AssetsPage;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  height: 93vh;
`;

const DescriptionContainer = styled.div`
  align-items: center;
  display: flex;
  padding-top: 1rem;
  flex-wrap: wrap;
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 2.2rem;
  margin-left: 1.4rem;
`;

const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors.violet};
  border: none;
  border-radius: 5rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  height: 5rem;
  justify-content: center;
  margin-left: 2rem;
  outline: none;
  width: 5rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.white};
  flex: 100%;
  margin: 0 0 0 1.4rem;
  padding: 2rem 10rem 2rem 0;
  font-size: 1.4rem;
`;

const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.violet};
  font-size: 1.4rem;
  padding-top: 2rem;
  margin: 0 0 0 1.4rem;
`;
