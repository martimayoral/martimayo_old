import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import "bootstrap"
import './App.css';
import AboutMe from "./pages/AboutMe";
import Training from "./pages/Training";
import LaboralExp from "./pages/LaboralExp";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  // I have all pages information here, in one simple array
  const pages = [
    {
      name: "About Me",
      component: (() => {return <AboutMe/>}),
      route: "/"
    },
    {
      name: "Training",
      component: (() => {return <Training/>}),
      route: "/training"
    },
    {
      name: "Laboral Experience",
      component: (() => {return <LaboralExp/>}),
      route: "/laboral"
    },
    {
      name: "Projects I've worked on",
      component: (() => {return <Projects/>}),
      route: "/projects"
    },
    {
      name: "Contact",
      component: (() => {return <Contact/>}),
      route: "/contact"
    }
  ]

  return (
    <div className="App">
      <Navbar fixed="top" className="navbar-dark bg-navbar pb-5 pt-3" expand="md">
        <div className="w-100">
          <Container>
            {/* For whenever is small */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav fill justify className="w-100" >
                {/* Navegation items */}
                {pages.map((page,i) => (
                  <Nav.Item key={i}>
                    <Nav.Link className={location.pathname !== page.route ? "nav-link" : "nav-link-selected"} href={page.route}>
                      {page.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
      </Navbar>

      <div>
        <div className="h-100">
          <Switch>
            {/* Classic react-router route design using switch */}
            {pages.map((page,i) => (
              <Route key={i} exact path={page.route}>
                {page.component}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
