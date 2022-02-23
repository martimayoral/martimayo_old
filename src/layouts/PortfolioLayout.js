import React from 'react'
import { faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const PortfolioLayout = ({ location, pages, children }) => (
    <div>
        <Navbar fixed="top" className="navbar-dark bg-navbar pb-5 pt-3" expand="md">
            <Container>
                {/* For whenever is small */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>
                    <Link to="" className="nav-link" onClick={() => { window.scrollTo(0, 600) }}>Martí Mayoral</Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ms-auto" >
                        {/* Navegation items */}
                        {pages.map((page, i) => (
                            <Nav.Item className=" mx-3" key={i}>

                                <Link to={page.route} onClick={() => {
                                    window.scrollTo(0, 0)
                                }} className={location.pathname !== page.route ? "nav-link" : "nav-link nav-link-selected"}>{page.name}</Link>

                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {children}

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
)

export default PortfolioLayout