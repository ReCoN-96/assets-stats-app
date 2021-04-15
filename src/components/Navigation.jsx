import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: max-content;
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.light_grey};
  margin-right: 3rem;
  font-weight: 600;
`;

const Navigation = () => (
  <Nav>
    <NavLink>Dashboard</NavLink>
    <NavLink>Assets</NavLink>
  </Nav>
);

export default Navigation;
