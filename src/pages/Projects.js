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

import unityLiuScreenshoot from "../images/projects/lightItUp/unityLiuScreenshoot.PNG"
import tilemapExample from "../images/projects/lightItUp/tilemapExample.PNG"
import animatedTileExample from "../images/projects/lightItUp/animatedTileExample.gif"
import animatingSystemToUIExample from "../images/projects/lightItUp/animatingSystemToUIExample.PNG"
import firebaseUnity from "../images/projects/lightItUp/firebase-unity.png"



import tfg from "../images/projects/tfg.png"
import reactLogo from "../images/react.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt, faFile } from "@fortawesome/free-solid-svg-icons"


function Projects() {

    const items = [
        {
            itemId: "light-it-up-unity",
            title: 'Video Game: "Light It Up" using Unity',
            //headVideoId: "U6mxT3KfP4w",
            customHead: (
                <iframe width="100%" style={{ minHeight: "400px" }} src="/games/lightItUpJs.html" title="light it up"></iframe>
            ),
            subtitle: "OCT 2021 - FEB 2022",
            description: (
                <Fragment>
                    <p>Afer graduating from computer science I wanted to work on some projects on my onw. Getting more experience in Unity.</p>
                    <p>I have been developing the app that I developed with C++ for my degree because I believe it can have a great future as a mobile app.</p>
                    <p>It is published for Android on Google Play Store, you can chech it out on the link below!</p>
                </Fragment>
            ),
            seeMoreContent: (
                <div className="">
                    <p>"Light it up" is a Game project that I created during the third year of my Univerity. It was first developed in C++,
                        you can read more about how it was developed and the aproach taken in its specific section. </p>
                    <p>Unity was chosen as the platform to develop the app since I was interested in getting more experience in that environment;
                        it would also allow me to add more features and explore my creativity.</p>
                    <p>Some of the work I already did when I was developing it in C++ has been reused, such as the sprites or the logic.</p>
                    <Col className="d-flex justify-content-center">
                        <img className="w-75 mb-3" src={unityLiuScreenshoot} alt="..." />
                    </Col>

                    <h4 className="fw-light">Resources used</h4>
                    <p>As for the resources, I wanted to explore what Unity has to offer and what could be utilized in the game.
                        Therefore, when deciding on how to develop and implement any feature, I first looked at what was already integrated into Unity.</p>
                    <p>Some interesting resources used are:</p>
                    <ul>
                        <li>
                            <h6>Tilemaps for the game levels:</h6>
                            <p>Unity has a Tilemap system which stores and handles Tile Assets for creating 2D levels.
                                You can also add 2D extras, so I could add features and extras if needed relatively easily.</p>
                            <Col className="d-flex justify-content-center">
                                <img className="w-75 mb-3" src={tilemapExample} alt="..." />
                            </Col>
                        </li>
                        <li>
                            <h6>Animated tiles for the tiles of the map:</h6>
                            <p>One of these added features of 2D extras for maps are Animated tiles. It easily allows to animate tiles such as the walls or the goals.</p>
                            <Col className="d-flex justify-content-center">
                                <img className="mb-3" style={{ maxHeight: "100px" }} src={animatedTileExample} alt="..." />
                            </Col>
                        </li>
                        <li>
                            <h6>Storing the levels</h6>
                            <p>To store the levels, I store them in JSON format, as it is an open standard file format and Unity has a built-in class to pack and unpack data.</p>
                        </li>
                        <li>
                            <h6>Using the integrated unity animating system for UI transitions:</h6>
                            <p>To do the transitions with the user interface, I saw that that was an interesting way of doing it.</p>
                            <Col className="d-flex justify-content-center">
                                <img className="w-75 mb-3" style={{ maxHeight: "200px", objectFit: "contain" }} src={animatingSystemToUIExample} alt="..." />
                            </Col>
                        </li>
                        <li>
                            <h6>Separating Unity scenes for each purpose:</h6>
                            <p>The project has 3 main scenes: The menu, the game and the level editor. I have created re-usable components,
                                such as the Game Controller, that allow me to maintain the different scenes organized with common functionalities.</p>
                        </li>
                        <li>
                            <h6>And much more!</h6>
                        </li>
                    </ul>

                    <h4 className="fw-light">Sharing levels</h4>
                    <p>Users can create their own levels and share them for other users to play them. The tecnology used to store this data was <b>Google Firebase</b>.</p>
                    <p>It is a platform that provides, among other features, a database that is well integrated with Unity. It has a lot of documentation and guides
                        that were usefull to develop the project on my own.</p>
                    <Col className="d-flex justify-content-center">
                        <img className="w-75 mb-3" style={{ maxHeight: "200px", objectFit: "contain" }} src={firebaseUnity} alt="..." />
                    </Col>
                    <p>Each created level would store the level name, the number of moves to win it, the map itself and the size.</p>
                    <p>It has been challenging to use, I came across some problems related with Unity and Firebase that made me think and come up with solutions.</p>


                    <h4 className="fw-light">Promotion Video</h4>
                    <p>In order to promote the app and also get to know more about how facebook ads work, I created a promotion video.</p>
                    <Container fluid>
                        <Row>
                            <Col></Col>
                            <Col md={8}>
                                <div className="wrapper">
                                    <div className="video-responsive">
                                        <iframe
                                            src={"https://www.youtube.com/embed/U6mxT3KfP4w?controls=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>

                    <h4 className="fw-light">Javascript demo version</h4>
                    <p>I created a simple version done with pure html, css and javascript.
                        It is the game that you can play on the beggining of this page. You can see the embeded 
                        element in this webpage: <a href="/games/lightItUpJs.html" target="_blank">lightItUpJs.html</a></p>
                </div >
            ),
            gitHub: "https://github.com/martimayoral/lightItUpUnity",
            customButton: {
                href: "https://play.google.com/store/apps/details?id=com.mmayo.LightItUp",
                text: (
                    <div className="text-dark">
                        <FontAwesomeIcon icon={faGooglePlay} size="xs" /> Play Store <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                    </div>
                ),
                color: "light"
            }
        }, {
            itemId: "human-interaction-fpg",
            headVideoId: "alnhMGPmye8",
            title: "Human interaction First Person Game",
            subtitle: "2021",
            description: (
                <Fragment>
                    <p>For the fourth year of my degree, in the Interactive Systems subject, we had to develop a project to run in their full-body virtual environment.</p>
                    <p>We were given a framewok with Unity that we had to populate with our idea.</p>
                    <p>The system is structured in a 6 by 6 meter arena, where a virtual world is projected on the floor.</p>
                </Fragment>
            ),
            gitHub: "https://github.com/martimayoral/SaveTheSheep",
        }, {
            itemId: "light-it-up-c",
            headVideoId: "-v4oWRMVQds",
            title: 'Video Game: "Light It Up" using C++',
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
            itemId: "snail-adventure",
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
            itemId: "tfg-mobile-game",
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
            ),
            customButton: {
                href: "https://drive.google.com/file/d/1RdgoeWy07Qvki-QuYzFuIuT_qYNBPnQn/view",
                text: (
                    <div className="text-dark">
                        <FontAwesomeIcon icon={faFile} className="me-1" /> View Work <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                    </div>
                ),
                color: "light"
            }
        }, {
            itemId: "this-portfolio",
            headImg: reactLogo,
            title: "This portfolio",
            subtitle: "2021 - Present",
            description: (
                <Fragment>
                    <p>I have developed this web page to let businesses know more about me.
                        CV's are good, but sometimes are not enough to show everything about oneself.</p>
                    <p>I have also worked on this webpage as an oportunity to learn more about creating webpages using ReacJs, whilst looking for a job in 2021.</p>
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
                    <p>In this section, we can see the projects I have worked on.<br />
                        I recomend you walk through the "see more" section.</p>
                </div>
                <Gallery items={items} itemName="project" />
            </Container>
        </div>
    )
}

export default Projects