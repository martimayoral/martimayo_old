import React from "react"
import { Container } from "react-bootstrap"
import ContactForm from "../components/ContactForm"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/contactBg.PNG"

function Contact() {
    return (
        <div>
            <HeaderImg img={headerBg} title="Contact" subtitles={["e-mail", "LinkedIn", "Contact Me!"]} />
            <Container className="">
                <div className="text-center text-muted mb-5">
                    <h1 className="display-4">Contact</h1>
                    <p>Please don't hesitate to contact me!</p>
                </div>
                <ContactForm />
            </Container>
        </div>
    )
}

export default Contact