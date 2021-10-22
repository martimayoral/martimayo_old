import React from "react"
import { Container } from "react-bootstrap"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/trainingBg.jpg"

function Training() {
    return (
        <div>
        <HeaderImg img={headerBg} title="Training" />
            <Container className=" ">
                <div className=" align-self-center">
                    <h1>Training</h1>
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

export default Training