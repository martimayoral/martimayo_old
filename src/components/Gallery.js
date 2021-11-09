import React from "react"
// REACT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"


function Gallery({ items }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-3">
            {items.map((item, i) =>
                <Item
                    key={i}
                    id={i}
                    headImg={item.headImg}
                    headVideoId={item.headVideoId}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    seeMoreContent={item.seeMoreContent}
                    webPage={item.webPage}
                    gitHub={item.gitHub}
                />
            )}
        </div>)
}

function Item({ id, headImg, headVideoId, title, subtitle, description, seeMoreContent, webPage, gitHub }) {
    const modalId = "modal" + id
    const Head = () => {
        if (headVideoId)
            return (
                <div>
                    <div className="wrapper">
                        <div className="video-responsive">
                            <iframe
                                src={"https://www.youtube.com/embed/" + headVideoId + "?controls=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            )

        if (headImg)
            return (
                <div className="mt-3 mx-3 d-flex justify-content-center">
                    <img className="img-fluid" src={headImg} alt="..." />
                </div>
            )
        return <span></span>;
    }

    return (
        <div className="col">

            {/* Card Content */}
            <div className={"card bg-dark text-white h-100 shadow-sm card-dark " + (!headVideoId && "card-animation")}> {/* Youtube videos dont work well with the animation */}

                {/* Head: image/video/... */}
                <Head />

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                    <span className="fw-light h3">{title} </span>
                    <span className="fw-light h5 text-muted">{subtitle}</span>
                    <div className="mt-3">
                        {description}
                    </div>
                    <div className="mt-auto ms-auto">
                        {webPage &&
                            <a className="btn btn-secondary ms-3 text-light" href={webPage} role="button" target="_blank" rel="noreferrer">
                                Web Page <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                            </a>
                        }{gitHub &&
                            <a className="btn btn-secondary ms-3 text-light" href={gitHub} role="button" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub}/> Github <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                            </a>
                        }
                        {seeMoreContent &&
                            <button type="button" className="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target={"#" + modalId}>
                                See More <FontAwesomeIcon icon={faPlus} />
                            </button>
                        }
                    </div>
                </div>
            </div>

            {/* Modal content */}
            {
                seeMoreContent &&
                <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
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
                </div>
            }
        </div >
    )
}

/* Gallery.Item = Item */
export default Gallery