import React from "react"
// REACT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function Gallery({ items }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-3">
            {items.map((item, i) =>
                <Item
                    key={i}
                    id={i}
                    headVideoId={item.headVideoId}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    seeMoreContent={item.seeMoreContent}
                    headImg={item.headImg}
                />
            )}
        </div>)
}

function Item({ headImg, headVideoId, title, subtitle, seeMoreContent, description, id }) {
    const modalId = "modal" + id
    const Head = () => {
        if (headVideoId)
            return (
                <div className="wrapper">
                    <div className="frame-container">
                        <iframe src={"https://www.youtube.com/embed/" + headVideoId + "?controls=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
            <div className="card bg-dark text-white h-100 shadow-sm card-dark">

                {/* Head: image/video/... */}
                <Head />

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                    <span className="fw-light h3">{title} </span>
                    <span className="fw-light h5 text-muted">{subtitle}</span>
                    <div className="mt-3">
                        {description}
                    </div>
                    {seeMoreContent &&
                        <div className="mt-auto ms-auto">
                            <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target={"#" + modalId}>
                                See More <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    }
                </div>
            </div>

            {/* Modal content */}
            {seeMoreContent &&
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
        </div>
    )
}

/* Gallery.Item = Item */
export default Gallery