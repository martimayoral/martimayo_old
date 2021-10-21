import React from "react"
import { Container } from "react-bootstrap"
import headerBg from "./../images/aboutMeBg.jpg"

function AboutMe() {
    return (
        <div>
            <header className="masthead" style={{ backgroundImage: `url(${headerBg})` }} />
            <Container className=" ">
                <div className=" align-self-center">
                    <h1>About Me</h1>
                    <br /><br /><br /><br />
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

export default AboutMe