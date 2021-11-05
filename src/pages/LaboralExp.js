import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import Gallery from "../components/Gallery"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/labExp/laboralExpBg.PNG"
import itSuppImg from "./../images/labExp/ciutadella.jpg"
import beablooImg from "./../images/labExp/beabloo-logo.png"

function LaboralExp() {
    const items = [
        {
            title: "Software Developer Internship",
            subtitle: "2019 - 2020",
            description: (
                <Fragment>
                    <p>The internship was done at Beabloo (<a href="http://playtyper.herokuapp.com/" target="_blank" rel="noreferrer">LinkedIn <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" /></a>)
                        during the third year of my bachelor degree.</p>
                    <p>I was responsible for receiving and solving the system issues the company users faced. If I could not solve the issue I would escalate it to senior developers.</p>
                    <p>We used a ticket manager system and Jira to manage the issues. I also had to do QA of the other developers of my team, as a first filter.</p>
                    <p>After my internship ended I was hired as a Software Developer.</p>
                </Fragment>
            ),
            headImg: beablooImg
        },
        {
            title: "University IT Support",
            subtitle: "2018",
            description: (
                <Fragment>
                    <p>I worked as an IT support at my university, UPF. I was in charge of helping students with the printing system, installing programs, scanning,...
                        And the professors with the computers, audio and projectors of their classes.</p>
                    <p>My collegues and I also were responsable of checking the state of the projectors of the University once every three months.</p>
                </Fragment>
            ),
            headImg: itSuppImg
        },
        {
            title: "Trampoline Gymnastics Coach",
            subtitle: "Since 2015",
            description: (
                <Fragment>
                    <p>As a gymnastics coach, I have improved my communication skills, time management, and I have become more adaptable.</p>
                </Fragment>
            )
        },
        {
            title: "Particular lessons",
            subtitle: "2019-present",
            description: (
                <Fragment>
                    <p>Since 2019 I started giving particular lessons to those who needed it. The fields that I have taught the most are Microsoft Excel and maths.</p>
                    <p>I have used the platform Superprof that is a website that connects people who needs lessons with people who can give them.</p>
                </Fragment>
            )
        }
    ]

    return (
        <div>
            <HeaderImg img={headerBg} title="Laboral Experience" subtitles={["Beabloo", "Particular Classes", "Gymnastics Coach"]} />
            <Container className="mt-4">
                <div className="text-center text-muted mb-5">
                    <h1 className="display-4">Laboral Experience</h1>
                    <p>Here we will see my work experience, how I have started and where have I worked</p>
                </div>
                <Gallery items={items} />
            </Container>
        </div>
    )
}

export default LaboralExp