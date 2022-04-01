import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//import img from "../../images/liu/initialScreen.png"

function Liu() {
    document.title = "Light it up"

    return (
        <div /* style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img})`,
            height: "100vh",
            minHeight: "100px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",

            backgroundPosition: "50% 50%",
        }} */ className="bg-dark">
            <Container>
                <div className=" d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>


                    <Container className="w-75 mb-3">
                        <div className="wrapper">
                            <div className="video-responsive">
                                <iframe
                                    title="liu"
                                    src="/myGames/lightItUpJs.html"></iframe>
                            </div>
                        </div>
                    </Container>

                    <a className="btn btn-lg btn-light mb-3" href="https://play.google.com/store/apps/details?id=com.mmayo.LightItUp" role="button" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGooglePlay} size="xs" /> Play Store <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                    </a>

                    <Link to={"/liu/privacy"}>
                        <button className="btn btn-lg btn-success">
                            Privacy Policy
                        </button>
                    </Link>
                </div>
            </Container>
        </div>
    )

}

export default Liu;