import React, { useEffect, useState } from "react";
import Typed from "react-typed"

function HeaderImg({ img, title, subtitles }) {
    const [scrY, setScrY] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    const handleScroll = () => {
        setScrY(window.pageYOffset)
    }

    return (
        <header
            style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img})`,
                height: "70vh",
                minHeight: "100px",
                backgroundSize: "cover",

                // 0 -> 40%
                // 500 -> 60%

                // 20(x/500) + 40
                backgroundPosition: "50% " + (40 * scrY / 500 + 35) + "%",
            }}
        >
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <h1 className="display-4">{title}</h1>
                        {subtitles && <Typed
                            className="lead "
                            strings={subtitles}
                            typeSpeed={30}
                            backSpeed={50}
                            loop
                        />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderImg

