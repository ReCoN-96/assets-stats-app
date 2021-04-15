import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

const Container = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${(props) => props.theme.colors.grey}
`;

const Wrapper = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: auto;
`;

const Header = () => <Container><Wrapper><Navigation /></Wrapper></Container>;

export default Header;
