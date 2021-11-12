import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/home/homeBg.jpg"
import bodyBg from "./../images/home/fullMe.PNG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

function Home() {

    return (
        <div>
            <HeaderImg img={headerBg} title="Home" subtitles={["This is my personal page", "I am so glad you are here", "Do not hesitate contacting me"]} />
            <Container className="mt-4">
                <div className="text-center text-muted mb-5">
                    <p>This webpage is an introduction to myself, to show where I come from, my skills and projects I have worked on</p>
                </div>
                <Container className="p-0 rounded" style={{
                    backgroundImage: `url(${bodyBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "100% 100%"
                }}>
                    <div style={{
                        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 70%)",
                        minHeight: "70vh"
                    }}>
                        <div className="p-4 px-5 h-100 d-flex flex-column">
                            <div className="h-100">
                                <Row className="row-cols-1 row-cols-md-2">
                                    <Col>
                                        <h3 className="fw-light mb-3">Hello!</h3>
                                        <p>I am Martí Mayoral, a {new Date().getFullYear() - 1999}-year-old graduate in Computer Science and this is my personal page. Welcome!</p>
                                        <p>I was born in Barcelona and I have lived there since.</p>
                                        <p>I have developed this web page to let businesses know more about me. CV's are good, but sometimes are not enough to show everything about oneself.
                                            I have also worked on this webpage as an oportunity to learn more about creating webpages using ReacJs, whilst looking for a job in 2021.</p>
                                        <p>Job wise, I am looking for a strong team that I can learn from, but also make contributions to through interesting and challenging work.
                                            My preference is working within the gaming industry, but that is not mandatory.</p>

                                    </Col>
                                </Row>
                            </div>
                            <form className="mt-2" method="get" action="CV_Public_Eng.pdf" target="_blank">
                                <button type="submit" className="btn btn-outline-light">Download my CV <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" /></button>
                            </form>
                        </div>
                    </div>
                </Container>
            </Container>
        </div >
    )
}

export default Home