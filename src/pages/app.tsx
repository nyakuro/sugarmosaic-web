import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import About from "pages/about";
import Discography from "pages/discograpy";
import Top from "pages/top";
import DrawerMenu from "components/drawerMenu";

export default function App() {
  return (
    <Router>
      <PageContainer>
        <DrawerContainer>
          <DrawerMenu />
        </DrawerContainer>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <PageBodyContainer>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/discography">
              <Discography />
            </Route>
            <Route path="/">
              <Top />
            </Route>
          </Switch>
        </PageBodyContainer>
      </PageContainer>
    </Router>
  );
}

const PageContainer = styled.div`
  background: #aac;
  width: 100%;
  height: 100%;
`;

const DrawerContainer = styled.div`
  height: 100%;
`;

const PageBodyContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
