import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import "bootstrap"
import './App.css';
import Training from "./pages/Training";
import AboutMe from "./pages/AboutMe";
import LaboralExp from "./pages/LaboralExp";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <Router>
        <header className=" ">
          <Navbar fixed="top" className="navbar-dark bg-navbar pb-5 pt-3" expand="md">
            <div className="w-100">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className=" " />
                <Navbar.Collapse className=" ">
                  <Nav fill className="w-100" >
                    <Nav.Item>
                      <Nav.Link className="text-light" href="/training">Training</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="text-light" href="/laboral">Laboral Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="text-light" href="/projects">Projects I've worked on</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="text-light" href="/aboutme">About Me</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </div>
          </Navbar>
        </header>
        <div className="w-50 h-100">
            <Switch>
              <Route path="/aboutme">
                <AboutMe/>
              </Route>
              <Route path="/training">
                <Training/>
              </Route>
              <Route path="/laboral">
                <LaboralExp/>
              </Route>
              <Route path="/projects">
                <Projects/>
              </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
