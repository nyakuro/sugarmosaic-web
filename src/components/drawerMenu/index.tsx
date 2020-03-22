import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HamburgerIcon from "components/icons/HamburgerIcon";

export default function DrawerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <>
      <HamburgerIconWrapper onClick={handleDrawerToggle}>
        <HamburgerIcon size={16} />
      </HamburgerIconWrapper>

      {isDrawerOpen && (
        <NavigationContainer>
          <CloseButton onClick={handleDrawerToggle}>x</CloseButton>
          <NavigationContent>
            <Navigation>
              <NavList>
                <NavItem>
                  <Link to="/">Top</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/discography">Discography</Link>
                </NavItem>
              </NavList>
            </Navigation>
          </NavigationContent>
        </NavigationContainer>
      )}
    </>
  );
}

const HamburgerIconWrapper = styled.div`
  position: absolute;
  right: 0px;
  padding: 16px;
  cursor: pointer;
`;
const NavigationContainer = styled.div`
  position: absolute;
  right: 0px;
  background: #ccc;
  width: 200px;
  height: 100%;
`;
const NavigationContent = styled.div`
  position: absolute;
  padding: 16px;
  width: 100%;
  margin-top: 32px;
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0px;
  margin-top: 8px;
  margin-right: 8px;
  padding: 8px;
`;
const Navigation = styled.nav``;
const NavList = styled.ul``;
const NavItem = styled.li`
  list-style-type: none;
`;
