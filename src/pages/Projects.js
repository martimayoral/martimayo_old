import React, { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import projectBg from "./../images/projects/projectBg.PNG"
import HeaderImg from "../components/HeaderImg"
import Gallery from "../components/Gallery"

// Light it up
import firstLevel from "../images/projects/lightItUp/firstLevel.PNG"
import firstLevelBits from "../images/projects/lightItUp/firstLevelBits.PNG"
import pallete from "../images/projects/lightItUp/pallete.png"
import movement from "../images/projects/lightItUp/movement.gif"
import lightBulb from "../images/projects/lightItUp/lightBulb.PNG"

import tfg from "../images/projects/tfg.png"

function Projects() {
    const items = [
        {
            headImg: projectBg,
            headVideoId: "-v4oWRMVQds",
            title: 'Video Game: "Light It Up"',
            subtitle: "2019",
            description: (
                <Fragment>
                    <p>This project was done for a subject in my Bachelor degree. It was made with C++ using an OpenGl framework our teacher provided.</p>
                    <p>The format of the class was a Game Jam with the topic "TOGETHER". As requested by the teacher, the project was made in 2 weeks.</p>
                </Fragment>
            ),
            seeMoreContent: (
                <div className="">
                    <p>This project was done for the Games subject of my Bachelor degree.</p>
                    <p>The format of the class was a Game Jam with the topic "TOGETHER". As requested by the teacher, the project was made in 2 weeks.</p>
                    <p>The framework provided by our teacher was in C++ and OpenGl. We had to create classes for controlling the state of the game;
                        i.e. if the player was playing, if the game was paused, if the player was at the menu, etc.</p>
                    <h4 className="fw-light">Map creation optimization</h4>
                    <p>He encoraged us to be smart about data usage, optimizing the space the game used. My project highlighted on that;
                        each level was defined in a file of extension <i>.map</i>. Every bit on this file contained the information on a cell of the map.</p>
                    <p>Let's see an example with the first level:</p>
                    <Row className="row-cols-1 row-cols-md-2 align-items-center">
                        <Col>
                            <img className="w-100  mb-3" src={firstLevel} alt="..." />
                        </Col>
                        <Col>
                            <img className="w-100 mb-3" src={firstLevelBits} alt="..." />
                        </Col>
                    </Row>
                    <p>In the first image we can see the first level as it is in the game. In the second one, we can see the value of the bits of each cell.
                        For instance, in the first cell, there is a bit of value 16, 10 in hexadecimal, that means a wall. The maps were created using the following pallete:</p>
                    <Col>
                        <img className="w-100 mb-3" src={pallete} alt="..." />
                    </Col>
                    <p>As we can see, the bit 16 corresponds to the wall in the pallete. Bit number 1, 5 and 9 are the spawn points of each light bulb,
                        and bits 2, 6 and 10 are the goal for each color.</p>
                    <h4 className="fw-light">Animating</h4>
                    <p>You might be wondering why are some of the cells repeated, for instance, the wall has 5 cells. That is to animate and create life in the
                        scene. The game changes the wall cell from 16 to 17, 18, 19, 20 and 16 again in a sequence to create an animation effect. Same thing for the goals.
                        Using this technique allows to create animation easily and with low usage of resources. This was used by many creators when their resources were not
                        as big as nowadays.</p>
                    <p>The sprites of the light bolbs are animated using the same tecnique. Using a 64x40px image, we can represent the whole animation.
                        In the left side, when it's not activated, and in the right side when it is.</p>
                    <Col className="d-flex justify-content-center">
                        <img className="w-50 mb-3" src={lightBulb} alt="..." />
                    </Col>
                    <p>We can see the result of this effect in the following image:</p>
                    <div className="d-flex justify-content-center">
                        <img className="w-50 mb-3" src={movement} alt="..." />
                    </div>
                </div>
            )
        }, {
            headImg: projectBg,
            title: "Human interaction First Person Game",
            subtitle: "2021",
            description: (
                <Fragment>
                    <p>For the fourth year of my degree, in the Interactive Systems subject, we had to develop a project to run in their full-body virtual environment.</p>
                    <p>We were given a framewok with Unity that we had to populate with our idea.</p>
                </Fragment>
            )
        }, {
            headVideoId: "x12yZsCnjgw",
            title: "Video Game: Snail Adventure",
            subtitle: "2019",
            description: (
                <Fragment>
                    <p>This is the other project done for the Games subject of my Bachelor degree. It was made with C++ using a 3D OpenGl framework our teacher provided.</p>
                    <p>We had two months for developing it, along with the theory clases of the subject. The format of the class was a Game Jam with a free topic.</p>
                </Fragment>
            )
        }, {
            headImg: tfg,
            title: "Mobile Game",
            subtitle: "2021",
            description: (
                <Fragment>
                    <p>My Bachelor degree's thesis was a Mobile Game done with React. It is avaliable at <a className="link" href="http://playtyper.herokuapp.com/" target="_blank" rel="noreferrer">
                        playtyper.herokuapp.com</a></p>
                    <p>It is a game where users have to write a sequence of words as fast as they can. Any registered player can create his own
                        Typer, choosing the words of his challenge and then sharing it with his friends to see who is the fastest typing them.</p>
                </Fragment>
            )
        }, {
            title: "This portfolio",
            subtitle: "2021",
            description: (
                <Fragment>
                    <p>I have developed this web page to let businesses know more about me.
                        CV's are good, but sometimes are not enough to show everything about oneself.
                        I have also worked on this webpage as an oportunity to learn more about creating webpages using ReacJs, whilst looking for a job in 2021.</p>
                </Fragment>
            ),
            gitHub: "https://github.com/martimayoral/martimayo"
        }
    ]


    return (
        <div>
            <HeaderImg img={projectBg} title="Projects" subtitles={["Programming", "C++", "React", "Interaction", "Optimizing", "Game", "For fun"]} />
            <Container className="mt-4">
                <div className="text-center text-muted mb-5">
                    <p>In this section, we can see the projects I have worked on</p>
                </div>
                <Gallery items={items} />
            </Container>
        </div>
    )
}

export default Projects