import React from "react"
import { Container } from "react-bootstrap"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/trainingBg.PNG"

function Training() {
    return (
        <div>
            <HeaderImg img={headerBg} title="Training" subtitles={["Bachelor degree", "Computer Science", "Engineering", "Learn", "Coach"]} />
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

export default Training