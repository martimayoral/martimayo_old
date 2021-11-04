import React from "react"
import { Container } from "react-bootstrap"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/aboutMeBg.jpg"

function AboutMe() {
    return (
        <div>
            <HeaderImg img={headerBg} title="Home" subtitles={["This is my personal page", "I am so glad you are here", "Do not hesitate contacting me"]}/>
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
                    <br /><br /><br /><br />bla bla bla
                    <br /><br /><br /><br />bla bla bla
                </div>
            </Container>
        </div>
    )
}

export default AboutMe