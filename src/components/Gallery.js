import React, { useEffect, useRef, useState } from "react"
// REACT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faLink, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap"

import { useLocation } from "react-router-dom"

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Gallery({ items, itemName }) {
    itemName = itemName || "item"
    const showMoreContentOpenedId = useQuery().get(itemName);

    return (
        <div className="row row-cols-1 row-cols-md-2 g-3">
            {items.map((item, i) =>
                <Item
                    key={i}
                    headImg={item.headImg}
                    headVideoId={item.headVideoId}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    seeMoreContent={item.seeMoreContent}
                    selected={item.itemId === showMoreContentOpenedId}
                    selectedQuery={itemName + "=" + item.itemId}
                    webPage={item.webPage}
                    gitHub={item.gitHub}
                    customButton={item.customButton}
                />
            )}
        </div>)
}

function Item({ headImg, headVideoId, title, subtitle, description, seeMoreContent, selected, selectedQuery, webPage, gitHub, customButton }) {

    const [show, setShow] = useState(selected);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [copyText, setCopyText] = useState("Copy direct link")

    const myRef = useRef(null)
    useEffect(() => {
        if (selected)
            myRef.current.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
    }, [selected])

    return (
        <div className="col" ref={myRef}>

            {/* Card Content */}
            <div className={"card text-white h-100 shadow-sm card-dark " + (!headVideoId && "card-animation") + (selected ? " bg-secondary" : " bg-dark")}> {/* Youtube videos dont work well with the animation */}

                {/* Head video */}
                {headVideoId && (
                    <div>
                        <div className="wrapper">
                            <div className="video-responsive">
                                <iframe
                                    src={"https://www.youtube.com/embed/" + headVideoId + "?controls=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                )}
                {/* Head image */}
                {headImg && (
                    <div className="mt-3 mx-3 d-flex justify-content-center">
                        <img className="img-fluid" src={headImg} alt="..." />
                    </div>
                )}

                {/* Card Body */}
                <div className="card-body d-flex flex-column" onMouseLeave={() => setCopyText("Copy direct link")}>
                    <span className={"fw-light h3 " + (selected && "text-info")}>
                        {title}

                        <OverlayTrigger placement={"right"} overlay={
                            <Tooltip id="copy-link-tooltip">{copyText}</Tooltip>
                        }>
                            <span className="d-inline-block">
                                <button className="btn btn-sm mx-2 text-light"
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href.split('?')[0] + "?" + selectedQuery)
                                        setCopyText("Link copied!")
                                    }}
                                >
                                    <FontAwesomeIcon icon={faLink} color={selected ? "black" : "white"} />
                                </button>
                            </span>
                        </OverlayTrigger></span>

                    <span className={"fw-light h5 " + (selected ? "text-light" : "text-muted")}>{subtitle}</span>
                    <div className="mt-3">
                        {description}
                    </div>
                    <div className="mt-auto ms-auto">
                        {customButton &&
                            <a className={"btn ms-3 text-light btn-" + (customButton.color || "secondary")} href={customButton.href} role="button" target="_blank" rel="noreferrer">
                                {customButton.text}
                            </a>
                        }
                        {webPage &&
                            <a className={"btn ms-3 text-light btn-" + (selected ? "dark" : "secondary")} href={webPage} role="button" target="_blank" rel="noreferrer">
                                Web Page <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                            </a>
                        }{gitHub &&
                            <a className={"btn ms-3 text-light btn-" + (selected ? "dark" : "secondary")} href={gitHub} role="button" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} /> Github <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                            </a>
                        }
                        {seeMoreContent &&
                            <button type="button" className="btn btn-primary ms-3" onClick={handleShow}>
                                See More <FontAwesomeIcon icon={faPlus} />
                            </button>
                        }
                    </div>
                </div>
            </div>

            {/* Modal content */}
            {
                seeMoreContent &&
                <Modal show={show} onHide={handleClose} size="xl" fullscreen="lg-down" centered className="pt-5" >

                    <Modal.Header closeButton closeVariant="white" className="bg-dark text-light">
                        <Modal.Title className="fw-light h3">
                            {title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-light">
                        {seeMoreContent}
                    </Modal.Body>

                    {
             /* <div className={"modal fade " + (showMoreContent && " show")} id={modalId} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden={showMoreContent ? "false" : "true"} style={{display: (showMoreContent ? "block" : "none")}} role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-xl mt-5">
                        <div className="modal-content bg-dark">
                            <div className="modal-header">
                                <div className="modal-title col fw-light h3" id="ModalLabel">{title}</div>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {seeMoreContent}
                            </div>
                        </div>
                    </div>
                </div> */}
                </Modal>
            }
        </div >
    )
}

/* Gallery.Item = Item */
export default Gallery