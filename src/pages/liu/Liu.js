import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../images/liu/initialScreen.png"

function Liu() {
    document.title = "Light it up"

    return (
        <div style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img})`,
            height: "100vh",
            minHeight: "100px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",

            backgroundPosition: "50% 50%",
        }}>
            <Container>
                <div className=" d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>

                        <button className="btn btn-lg btn-light mb-3" disabled>
                           <FontAwesomeIcon icon={faGooglePlay} size="xs" /> Play Store <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                        </button>

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