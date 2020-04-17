import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Switch, Route, HashRouter, Redirect} from "react-router-dom";
import Home from "./Home";

function Routes() {
  return (
    <HashRouter>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Led UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <div className="content">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
             <Home/>
          </Route>
        </div>
      </Switch>
    </HashRouter>
  )
}

export default Routes;