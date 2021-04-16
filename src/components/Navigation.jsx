import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  align-items: center;
  border-image: 
    linear-gradient( 
      to bottom, 
      transparent,
    #3a3a3c, 
    rgba(252,252,252,0.2),
    #3a3a3c ,
      transparent 
    ) 1 100%;
  border-style: solid;
  border-width: 0 0.2rem 0 0;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: max-content;
`;

const NavOutliner = styled.span`
    background-color: ${(props) => props.theme.colors.violet};
    height: 0.2rem;
    left: 1.6rem;
    margin-bottom: -0.2rem;
    position: absolute;
    width: 3rem;
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
    <NavOutliner />
  </Nav>
);

export default Navigation;
