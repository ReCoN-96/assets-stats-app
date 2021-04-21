import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

import AddAsset from './AddAsset';

const Container = styled.div`
  align-items: center;
  border-bottom: solid 0.1px rgb(190, 189, 188, 0.1);
  color: ${(props) => props.theme.colors.violet};
  display: flex;
  justify-content: space-between;
  padding: 3rem;
`;

const Modal = styled(ReactModal)`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 800px;
    height: 700px;
    background-color: ${(props) => props.theme.colors.dark_grey};
    border: 3px solid ${(props) => props.theme.colors.grey};
    border-radius: 5rem;
    outline: none;
  }
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  svg{
    transform: rotate(45deg);
  }
`;

const ButtonClose = ({ onClick }) => (
  <Button onClick={onClick}>
    <svg
      width="16"
      height="16"
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
const AssetsModal = ({ isOpen, toggleModal, setAssets }) => (
  <Modal
    ariaHideApp={false}
    onRequestClose={toggleModal}
    isOpen={isOpen}
    style={{
      overlay: {
        backgroundColor: 'transparent',
      },
    }}
  >
    <Container>
      <Title>Add an asset</Title>
      <ButtonClose onClick={toggleModal} />
    </Container>
    <AddAsset setAssets={setAssets} />
  </Modal>
);

export default AssetsModal;
