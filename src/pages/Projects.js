import React from "react"
import { Container } from "react-bootstrap"
import headerBg from "./../images/projectBg.PNG"
import HeaderImg from "../components/HeaderImg"
// REACT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    return (
        <div>
            <HeaderImg img={headerBg} title="Projects" />
            <Container className="mt-5 ">
                <div className=" align-self-center bg-danger d-flex">

                    <div class="card mb-3">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div> 
                    <div class="card mb-3">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                    <h1>Projects</h1>
                    <FontAwesomeIcon icon={faCoffee} />
                    <br /><br />

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                        Launch demo modal
                    </button>

                    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl mt-5">
                            <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Modal title</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                    <br /><br /><br />bla bla bla
                                    <br /><br /><br /><br />bla bla bla
                                    <br /><br /><br /><br />bla bla bla
                                    <br /><br /><br /><br />bla bla bla
                                    <br /><br /><br /><br />bla bla bla
                                    <br /><br /><br />bla bla bla
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Projects