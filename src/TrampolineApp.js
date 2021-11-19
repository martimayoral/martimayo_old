import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function TrampolineApp() {

    const location = useLocation();

    return (
        <Container>
            <div className=" d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>

                <Link to={location.pathname + "/rutine-generator" }>
                    <button className="btn btn-lg btn-success">
                        Generador d'exercicis
                    </button>
                </Link>
            </div>
        </Container>
    )

}

export default TrampolineApp;