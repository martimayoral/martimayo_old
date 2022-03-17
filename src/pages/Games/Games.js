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

import icon2048 from "./icons/2048.png"
import iconLiu from "./icons/lightItUpLogo.png"


function Games() {
    document.title = "Games"
    let match = useRouteMatch();

    const defaultAspectRatio = 9 / 6
    const games = {
        lightItUp: {
            name: "Light it up",
            icon: iconLiu,
            gameLink: "/lightItUpJs.html",
        },
        mmayo2048: {
            name: "Mmayo 2048",
            icon: icon2048,
            gameLink: "/mmayo2048.html",
            aspectRatio: 1
        }
    }

    function GameLayout() {
        let { gameId } = useParams();
        const game = games[gameId];
        const [isFullScreen, setIsFullScreen] = useState(false)
        const [liked, setLiked] = useState(false)


        const aspectRatio = (game.aspectRatio || defaultAspectRatio) + ""

        const fullScreenStyle = {
            width: "100%",
            maxHeight: "100%",
            aspectRatio: aspectRatio,
            margin: "auto",
        }
        const defaultStyle = {
            width: "100%",
            maxHeight: "100vh",
            aspectRatio: aspectRatio,
            margin: "auto",
        }

        return (
            <div className="bg-dark h-100" style={isFullScreen ? { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, marign: 0, /* overflow: "hidden" */ } : {}}>

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
        <div className="bg-primary">

            <Container>
                {/* Header */}
                <Row>
                    <Col className="py-4 bg-secondary">
                        <Link to="/games">
                            <img style={{ height: "100%", imageRendering: "pixelated" }} src={mmayoGamesLogo} alt="..." />
                        </Link>
                    </Col>
                </Row>

                {/* Body */}
                <Row>
                    <Col className="py-4 bg-dark" md={9}>

                        <Switch>
                            <Route exact path={match.path}>
                                <Container>
                                    <Row>
                                        <h3>All Games</h3>
                                        {
                                            Object.keys(games).map(key => {
                                                // console.log(key)
                                                return (
                                                    <Col key={key} xs={6} sm={4} md={3} xl={2}>
                                                        <Link className="text-center text-light" to={"/games/" + key} style={{ textDecoration: "none" }}>
                                                            <Card className="mb-3 bg-secondary card-animation" >
                                                                <img className="img-fluid m-2" style={{ imageRendering: "pixelated" }} src={games[key].icon} alt="..." />
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
                    <Col className="py-4 bg-secondary" md={3}>
                        <h3>Most played</h3>
                        <ol>
                            {
                                Object.keys(games).map(key => {
                                    // console.log(key)
                                    return (
                                        <li key={key}>
                                            <Link to={"/games/" + key}>{games[key].name}</Link><br />
                                        </li>
                                    );
                                })
                            }
                        </ol>

                    </Col>
                </Row>
            </Container>
            <Container>
                bottom
            </Container>
        </div >
    )

}

export default Games;