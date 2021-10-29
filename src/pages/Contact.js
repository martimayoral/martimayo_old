import React from "react"
import { Container } from "react-bootstrap"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/contactBg.PNG"

function Contact() {
    return (
        <div>
            <HeaderImg img={headerBg} title="Contact"  subtitles={["e-mail", "LinkedIn", "Contact Me!"]}/>
            <Container className=" ">
                <div className=" align-self-center">
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

export default Contact