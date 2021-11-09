import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import "bootstrap"
import './App.css';
import Home from "./pages/Home";
import Training from "./pages/Training";
import LaboralExp from "./pages/LaboralExp";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const location = useLocation();

  // I have all pages information here, in one simple array
  const pages = [
    {
      name: "Home",
      component: (() => { return <Home /> }),
      route: "/"
    },
    {
      name: "Training",
      component: (() => { return <Training /> }),
      route: "/training"
    },
    {
      name: "Laboral Experience",
      component: (() => { return <LaboralExp /> }),
      route: "/laboral"
    },
    {
      name: "Projects I've worked on",
      component: (() => { return <Projects /> }),
      route: "/projects"
    },
    {
      name: "Contact",
      component: (() => { return <Contact /> }),
      route: "/contact"
    }
  ]

  return (
    <div className="App">
      <Navbar fixed="top" className="navbar-dark bg-navbar pb-5 pt-3" expand="md">
        <Container>
          {/* For whenever is small */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand>
            Martí Mayoral
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="ms-auto" >
              {/* Navegation items */}
              {pages.map((page, i) => (
                <Nav.Item className=" mx-3" key={i}>
                  <Nav.Link className={location.pathname !== page.route ? " " : "nav-link-selected"} href={page.route}>
                    {page.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <div className="h-100">
          <Switch>
            {/* Classic react-router route design using switch */}
            {pages.map((page, i) => (
              <Route key={i} exact path={page.route}>
                {page.component}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
      <Container>
        <footer className="py-5 mt-5 border-top border-secondary ">
          <Row className="">
            <Col className="">
              <a className="btn btn-outline-light" href="https://www.linkedin.com/in/martimayoral/" role="button" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> Contact me on LinkedIn!
              </a>
            </Col>
            <Col className=" my-auto">
              <p className="my-auto text-end">
                <FontAwesomeIcon icon={faReact} style={{ color: "cyan" }} />  Made with react
              </p>
            </Col>
          </Row>
        </footer>
      </Container>
    </div>
  );
}

export default App;
