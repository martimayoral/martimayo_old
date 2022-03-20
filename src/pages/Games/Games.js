import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
    Switch,
    Route,
    useRouteMatch,
    Link
} from "react-router-dom";
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressArrowsAlt, faExpandArrowsAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import mmayoGamesLogo from "./mmayogames.png"

import icon2048 from "./icons/logo2048_128.png"
import iconLiu from "./icons/lightItUpLogo.png"
import testLogo from "./icons/tests.png"


function Games() {
    let match = useRouteMatch();
    document.title = "Games"

    const bgImg = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500"><image width="400" height="400" style="transform: translate(100px,-70px) rotate(25deg)  ; image-rendering: pixelated" xlink:href="${mmayoGamesLogo}" /></svg>')`

    const defaultAspectRatio = 9 / 6
    const games = {
        lightItUp: {
            name: "Light it up",
            icon: iconLiu,
            gameLink: "/games/lightItUpJs.html",
        },
        mmayo2048: {
            name: "Mmayo 2048",
            icon: icon2048,
            gameLink: "/games/mmayo2048.html",
            aspectRatio: 1
        },
        testGame: {
            name: "test game",
            icon: testLogo,
            gameLink: "/games/test.html",
            aspectRatio: 4 / 5
        }
    }

    function GameLayout() {
        let { gameId } = useParams();
        const game = games[gameId];
        const [isFullScreen, setIsFullScreen] = useState(false)
        const [liked, setLiked] = useState(false)
        document.title = game.name


        const aspectRatio = (game.aspectRatio || defaultAspectRatio) + ""

        const fullScreenStyle = {
            width: "100%",
            maxHeight: "100%",
            aspectRatio: aspectRatio,
            margin: "auto",
        }
        const defaultStyle = {
            width: "100%",
            maxHeight: "90vh",
            aspectRatio: aspectRatio,
            margin: "auto",
        }

        return (
            <div
                className={isFullScreen ? "bg-dark" : ""}
                style={isFullScreen ? {
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    marign: 0,
                    backgroundImage: bgImg,
                    /* overflow: "hidden" */
                } : {}}>

                <div className="d-flex h-100 flex-column">
                    <Row className="m-2  ">
                        <Col>
                            <h3>GAME: {game.name}</h3>
                        </Col>
                        <Col className="col-auto">
                            <Button
                                variant="light"
                                onClick={() => setLiked((liked) => !liked)}
                            >
                                <FontAwesomeIcon icon={faHeart} color={liked ? "red" : "black"} />
                            </Button>
                        </Col>
                        <Col className="col-auto">
                            <Button
                                variant="light"
                                onClick={() => setIsFullScreen((fs) => !fs)}
                            >
                                <FontAwesomeIcon icon={isFullScreen ? faCompressArrowsAlt : faExpandArrowsAlt} />
                            </Button>
                        </Col>
                    </Row>
                    <hr className="m-0" />
                    <Row
                        className="align-items-center justify-content-center"
                        style={isFullScreen ? fullScreenStyle : defaultStyle}
                    >
                        <iframe title={game.name} src={game.gameLink} style={{ height: "100%", widht: "100%", position: "relative" }} ></iframe>
                    </Row>
                </div>
            </div >
        )

    }

    return (
        <div
            style={{
                minHeight: "100vh",/* 
                backgroundColor: "black", */
                backgroundImage: bgImg
            }}
        >


            <Container>
                {/* Header */}
                <Row>
                    <Col className="py-4 bg-secondary bg-opacity-75">
                        <Link to="/games">
                            <img style={{ height: "100%", imageRendering: "pixelated" }} src={mmayoGamesLogo} alt="..." />
                        </Link>
                    </Col>
                </Row>

                {/* Body */}
                <Row>
                    <Col className="py-4 bg-dark bg-opacity-75" md={9}>

                        <Switch>
                            <Route exact path={match.path}>
                                <Container>
                                    <Row>
                                        <h3>All Games</h3>
                                        <hr />
                                        {
                                            Object.keys(games).map(key => {
                                                // console.log(key)
                                                return (
                                                    <Col key={key} xs={6} sm={4} md={3} xl={2}>
                                                        <Link className="text-center text-light" to={"/games/" + key} style={{ textDecoration: "none" }}>
                                                            <Card className="mb-3 bg-secondary card-animation" >
                                                                <img className="img-fluid m-2 rounded" src={games[key].icon} alt="..." />
                                                                <h5 >{games[key].name}</h5>

                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>
                                </Container>
                            </Route>

                            <Route path={`${match.path}/:gameId`}>
                                <GameLayout />
                            </Route>
                        </Switch>

                    </Col>
                    <Col className="py-4 bg-secondary bg-opacity-50" md={3}>
                        <h3>Most played</h3>
                        {
                            Object.keys(games).map((key, i) => {
                                // console.log(key)
                                return (
                                    <Row key={key} >
                                        <Link className="text-light" to={"/games/" + key} style={{ textDecoration: "none" }}>
                                            <Card className="mb-3 bg-dark card-animation" >
                                                <Row className="m-2 align-items-center">
                                                    <Col className="px-1" xs={"auto"} style={{ fontSize: "20px" }}>{i + 1} </Col>
                                                    <Col className="px-1" xs={"auto"} >
                                                        <img className="rounded " style={{ height: "30px", width: "30px" }} src={games[key].icon} alt="..." />
                                                    </Col >
                                                    <Col xs={"auto"} className="px-1" > {games[key].name}</Col>

                                                </Row>
                                            </Card>
                                        </Link>
                                    </Row>
                                );
                            })
                        }

                    </Col>
                </Row>
            </Container>
            <Container>
                <hr />
                <footer >
                    <p className="py-3 m-0">Thank you for playing at mmayo games!</p>
                </footer>
            </Container>
        </div >
    )

}

export default Games;