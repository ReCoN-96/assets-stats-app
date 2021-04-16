import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    bottom: 0;
    height: 0.2rem;
    left: 1.6rem;
    margin-bottom: -0.2rem;
    position: absolute;
    width: 3rem;
`;

const LinkItem = styled(NavLink)`
  color: ${(props) => props.theme.colors.light_grey};
  margin-right: 3rem;
  font-weight: 600;
  &.active {
    color: ${(props) => props.theme.colors.white};  
  }
`;

const Navigation = () => (
  <Nav>
    <LinkItem exact to="/" activeClassName="active">Dashboard</LinkItem>
    <LinkItem exact to="/assets" activeClassName="active">Assets</LinkItem>
    <NavOutliner />
  </Nav>
);

export default Navigation;
