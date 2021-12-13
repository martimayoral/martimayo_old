import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function TrampolineApp() {
    document.title = "Trampoli"

    return (
        <Container>
            <div className=" d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>

                <Link to={"/trampoli/rutine-generator"}>
                    <button className="btn btn-lg btn-success">
                        Generador d'exercicis
                    </button>
                </Link>
            </div>
        </Container>
    )

}

export default TrampolineApp;