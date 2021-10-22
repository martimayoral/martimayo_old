import React from "react"
import { Container } from "react-bootstrap"
import headerBg from "./../images/projectBg.PNG"
import HeaderImg from "../components/HeaderImg"
// REACT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    return (
        <div>
            <HeaderImg img={headerBg} title="Projects" />
            <Container className=" ">
                <div className=" align-self-center">
                    <h1>Projects</h1>
                    <br /><br /><br /><br />
                    <FontAwesomeIcon icon={faCoffee} />
                    <br /><br /><br /><br />bla bla bla
                    <br /><br /><br /><br />bla bla bla
                    <br /><br /><br /><br />bla bla bla
                    <br /><br /><br /><br />bla bla bla
                    <br /><br /><br /><br />bla bla bla
                    <br /><br /><br /><br />bla bla bla
                </div>
            </Container>
        </div>
    )
}

export default Projects