import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import Gallery from "../components/Gallery"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/training/trainingBg.PNG"
import ins from "./../images/training/ins.PNG"

function Training() {
    const items = [
        {
            itemId: "upf-bachelor",
            title: "Pompeu Fabra University",
            subtitle: "2017 - 2021",
            description: (
                <Fragment>
                    <p>For my bachelor's degree, I went to Pompeu Fabra University (UPF). The degree specializes in Computer Engineering and
                        it is one of the four degrees of the UPF's Polytechnic School.</p>
                    <p>"UPF is a public university based in Barcelona that is highly competitive in research and aims to transform education to respond to future challenges.
                        It is the 15th best young university in the world", according to <a className="link" href="https://www.upf.edu/en/web/universitat/presentacio-breu-de-la-upf" target="_blank" rel="noreferrer">
                            Times Higher Education <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                        </a>.</p>
                </Fragment>
            ),
            webPage: "https://www.upf.edu/",
            headImg: headerBg
        }, {
            itemId: "secondary-school",
            title: "Institut La Sedeta",
            subtitle: "2011 - 2017",
            description: (
                <Fragment>
                    <p>My secondary school was Institut la sedeta. It is a public school in Barcelona.</p>
                </Fragment>
            ),
            webPage: "https://agora.xtec.cat/ieslasedeta/linstitut/",
            headImg: ins
        }, {
            itemId: "trampoline-level1",
            title: "Trampoline Gymnastics Coach of level 1",
            subtitle: "2018",
            description: (
                <Fragment>
                    <p>At Catalan School of Sports.</p>
                </Fragment>
            )
        }, {
            itemId: "fce-b2",
            title: "English First Certificate B2",
            subtitle: "2017",
            description: (
                <Fragment>
                    <p>At CiC escola d'Idiomes.</p>
                </Fragment>
            )
        },
    ]

    return (
        <div>
            <HeaderImg img={headerBg} title="Training" subtitles={["Bachelor degree", "Computer Science", "Engineering", "Learn", "Coach"]} />
            <Container className="mt-4">
                <div className="text-center text-muted mb-5">
                    <p>This section shows where I got training that lead me to the position I am right now</p>
                </div>
                <Gallery items={items} />
            </Container>

        </div>
    )
}

export default Training