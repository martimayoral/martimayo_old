import React from "react"
import { Container } from "react-bootstrap"
import Gallery from "../components/Gallery"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/trainingBg.PNG"

function Training() {
    const items = [

    ]
    return (
        <div>
            <HeaderImg img={headerBg} title="Training" subtitles={["Bachelor degree", "Computer Science", "Engineering", "Learn", "Coach"]} />
            <Container className="mt-4">
                <div className="text-center text-muted mb-5">
                    <h1 className="display-4">Training</h1>
                    <p>Where did I get the training that lead me to the position I am right now</p>
                </div>
                <Gallery items={items} />
            </Container>
            
        </div>
    )
}

export default Training