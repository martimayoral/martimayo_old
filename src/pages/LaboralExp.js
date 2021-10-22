import React from "react"
import { Container } from "react-bootstrap"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/laboralExpBg.jpg"

function LaboralExp() {
    return (
        <div>
            <HeaderImg img={headerBg} title="Laboral Experience" subtitles={["Beabloo", "Particular Classes", "Gymnastics Coach"]}/>
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

export default LaboralExp