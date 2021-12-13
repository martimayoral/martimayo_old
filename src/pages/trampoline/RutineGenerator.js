import { faChevronDown, faChevronUp, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Fragment, useState } from "react"
import { Accordion, ButtonGroup, Container, Button, Dropdown, Collapse, Modal, Image } from "react-bootstrap"
import FormRange from "react-bootstrap/esm/FormRange"
import qrImg from "./../../images/trampoli/trampoliQR.PNG"

// per afegir un element:
// - Afegir un checkbox
// - afegir a elements
// ---
// - si es un grup afegir a groups
// - si pot començar afegir a startElementIds

function RutineGenerator() {
    document.title = "Generador d'exercicis"

    const groups = {
        base: ["agrupat", "cOb", "cT", "mGir", "Gir", "Sentat", "mGirSentat", "aPit", "esquena", "quinta"],
        mortalsf: ["a40f", "c40f", "p40f"],
        mortals: ["a40", "c40", "p40"],
        baranis: ["a41", "c41", "p41"],
        babys: ["a51", "c51", "p51"],
        dobles: ["a80", "c80", "p80"],
        fiflis: ["a81", "c81", "p81"],
    }

    const [data, setData] = useState({
        _Llargada: 10,
        a0Peu: true,
        qualsevol: true,

    })


    const [continuacions, setContinuacions] = useState({

        Sentat: ["a0Peu", "a0Peu"],
        mGirSentat: ["a0Peu", "a0Peu"],
        aPit: ["a0Peu", "a0Peu"],
        esquena: ["a0Peu", "a0Peu"],
        tresQuarts: ["a0Peu", "a0Peu"],
        tresQuartsf: ["a0Peu", "a0Peu"],
        mortaltq: ["a0Peu", "a0Peu"],
        mortalesq: ["a0Peu", "a0Peu"],
    })

    
    const elements = {

        bot: {
            name: "Bot",
        },

        agrupat: {
            name: "Agrupat",
            defaultEnllacDe: ["rdy", "a0Peu", "a81", "c81", "p81", "a80", "c80", "p80"]
        },

        cOb: {
            name: "Carpa Oberta",
            defaultEnllacDe: ["rdy", "a0Peu", "a81", "c81", "p81", "a80", "c80", "p80"]
        },

        cT: {
            name: "Carpa Tancada",
            defaultEnllacDe: ["rdy", "a0Peu", "a81", "c81", "p81", "a80", "c80", "p80"]
        },

        mGir: {
            name: "Mig gir",
        },

        Gir: {
            name: "Gir Sencer",
        },

        Sentat: {
            name: "Sentat",
        },

        mGirSentat: {
            name: "Mig Gir Sentat",
            defaultEnllacDe: ["Sentat"],
        },

        a0Peu: {
            name: "A peu",
            defaultEnllacDe: ["Sentat", "mGirSentat", "aPit", "esquena", "tresQuarts", "tresQuartsf", "mortalesq", "mortaltq"]
        },

        aPit: {
            name: "A pit",
            defaultEnllacDe: ["mGirSentat", "Sentat"],
        },

        esquena: {
            name: "Esquena",
            defaultEnllacDe: ["aPit"],
        },

        quinta: {
            name: "Quinta",
            defaultEnllacDe: ["esquena", "mortalesq"]
        },

        a40: {
            name: "0",
            preName: "Mortal Enrere",
            tecName: "400.",
        },

        c40: {
            name: "<",
            preName: "Mortal Enrere",
            tecName: "40<.",
        },

        p40: {
            name: "/",
            preName: "Mortal Enrere",
            tecName: "40/.",
        },


        a40f: {
            name: "0",
            preName: "Mortal Endavant",
            tecName: "400",
        },

        c40f: {
            name: "<",
            preName: "Mortal Endavant",
            tecName: "40<",
        },

        p40f: {
            name: "/",
            preName: "Mortal Endavant",
            tecName: "40/",
        },


        a41: {
            name: "0",
            preName: "Barani",
            tecName: "410",
        },

        c41: {
            name: "<",
            preName: "Barani",
            tecName: "41<",
        },

        p41: {
            name: "/",
            preName: "Barani",
            tecName: "41/",
        },

        piru: {
            name: "Pirueta enradera",
            tecName: "42",
        },

        rdy: {
            name: "Rudy",
            tecName: "43",
        },

        tresQuartsf: {
            name: "Tres quarts endavant",
            tecName: "300",
        },

        tresQuarts: {
            name: "Tres quarts enrere",
            tecName: "300.",
        },

        mortaltq: {
            name: "Mortal tres quarts",
            tecName: "700",
        },

        mortalesq: {
            name: "Mortal esquena",
            tecName: "500.",
        },

        a51: {
            name: "0",
            preName: "Baby",
            tecName: "510",
            defaultEnllacDe: ["tresQuartsf", "mortaltq"]
        },

        c51: {
            name: "<",
            preName: "Baby",
            tecName: "51<",
            defaultEnllacDe: ["tresQuartsf", "mortaltq"]
        },

        p51: {
            name: "/",
            preName: "Baby",
            tecName: "51/",
            defaultEnllacDe: ["tresQuartsf", "mortaltq"]
        },

        a80: {
            name: "0",
            preName: "Doble endarrera",
            tecName: "800 0",
        },

        c80: {
            name: "<",
            preName: "Doble endarrera",
            tecName: "800 <",
        },

        p80: {
            name: "/",
            preName: "Doble endarrera",
            tecName: "800 /",
        },

        a81: {
            name: "0",
            preName: "Fiflis",
            tecName: "801 0",
        },

        c81: {
            name: "<",
            preName: "Fiflis",
            tecName: "801 <",
        },

        p81: {
            name: "/",
            preName: "Fiflis",
            tecName: "801 /",
        },

        //----
        qualsevol: {
            name: "Aleatori",
        },
    }

    const pe = (elementId) => {
        if (elements[elementId]) {
            if (data["_tecNames"] && elements[elementId].tecName)
                return elements[elementId].tecName
            else if (elements[elementId].preName)
                return elements[elementId].preName + " " + elements[elementId].name
            else
                return elements[elementId].name
        }
        else
            return ""
    }

    const startElementIds = [
        "agrupat",
        "cOb",
        "cT",
        "mGir",
        "Gir",
        "Sentat",
        "esquena",
        "a40",
        "c40",
        "p40",
        "a40f",
        "c40f",
        "p40f",
        "a41",
        "c41",
        "p41",
        "rdy",
        "piru",
        "tresQuartsf",
        "tresQuarts",
        "mortaltq",
        "mortalesq",
        "a81",
        "c81",
        "p81",
        "a80",
        "c80",
        "p80",
    ]

    const [exercici, setExercici] = useState(null)

    const AccordionItem = ({ title, children }) => {
        return (
            <Accordion.Item eventKey={title}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {children}
                </Accordion.Body>
            </Accordion.Item>
        )
    }

    const InputBox = ({ name, id, subelement, helper }) => {
        var n = name || pe(id)


        return (
            <div className={"form-check " + (subelement ? " mx-1" : " mt-3")}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={n}
                    id={"flexCheck" + id}
                    checked={data[id]}
                    onChange={() => toggleCheck(id)}
                />
                <label className="form-check-label" htmlFor={"flexCheck" + id}>
                    {n}
                </label>
                {helper && (
                    <Button size="sm" variant="light" onClick={() => toggleCheck("_hlp" + id)}>
                        <FontAwesomeIcon icon={faInfoCircle} size="sm" />
                    </Button>

                )}
                {helper && data["_hlp" + id] &&
                    <p className="text-muted ">{helper}</p>
                }

            </div>
        )
    }


    const toggleCheck = (inputName) => {
        setData((prevState) => {
            const newState = { ...prevState }
            newState[inputName] = !prevState[inputName]

            // afegir enllaç default
            if (elements[inputName] && elements[inputName].defaultEnllacDe)
                elements[inputName].defaultEnllacDe.map((el) => newState[inputName] ? addContinuacio(el, inputName) : removeAllEnllac(el, inputName))
            return newState
        })
    }
    const setCheck = (inputName, value) => {
        setData((prevState) => {
            const newState = { ...prevState }
            newState[inputName] = value

            console.log(inputName)
            if (elements[inputName] && elements[inputName].defaultEnllacDe)
                elements[inputName].defaultEnllacDe.map((el) => newState[inputName] ? addContinuacio(el, inputName) : removeAllEnllac(el, inputName))
            return newState
        })
    }

    const InputBoxGroup = ({ groupName, id, tecGroupName }) => {
        const cId = id || groupName

        const toggleGroup = (inputName) => {
            toggleCheck(inputName)
            groups[inputName].map((a) => setCheck(a, !data[inputName]))

        }

        return (
            <div className="form-check mt-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={groupName}
                    id={"flexCheck" + cId}
                    checked={data[cId]}
                    onChange={() => toggleGroup(cId)}
                />
                <label className="form-check-label me-3" htmlFor={"flexCheck" + cId}>
                    {data["_tecNames"] && tecGroupName ? tecGroupName : groupName}
                </label>
            </div>
        )
    }

    const TRIOInputGroup = ({ groupName, tecGroupName, groupId, aId, cId, pId }) => {
        return (
            <div className="d-flex align-items-center justify-content-between">
                <InputBoxGroup groupName={groupName} tecGroupName={tecGroupName} id={groupId} />
                <div className="d-flex align-items-center mt-3">
                    <InputBox subelement name="0" id={aId} />
                    <InputBox subelement name="<" id={cId} />
                    <InputBox subelement name="/" id={pId} />
                </div>
            </div>
        )
    }



    const removeContinuacio = (continuacio) => {
        setContinuacions((prevState) => {
            const newState = { ...prevState }
            delete newState[continuacio]

            console.log(newState)

            return newState
        })
    }

    const removeAllEnllac = (continuacio, enllac) => {
        setContinuacions((prevState) => {
            const newState = { ...prevState }
            if (newState[continuacio])
                newState[continuacio] = newState[continuacio].filter(e => e !== enllac)

            console.log(newState)
            console.log(newState[continuacio])

            return newState
        })
    }

    const removeEnllac = (continuacio, enllac) => {
        setContinuacions((prevState) => {
            const newState = { ...prevState }
            // check if it has it
            if (newState[continuacio].includes(enllac))
                newState[continuacio].splice(newState[continuacio].indexOf(enllac), 1)

            console.log(newState[continuacio])
            return newState
        })
    }

    const addContinuacio = (continuacio, enllac) => {
        setContinuacions((prevState) => {
            const newState = { ...prevState }
            if (!enllac) { // si no hi ha el enllaç (es nou)
                newState[continuacio] = []
                if (elements["a0Peu"].defaultEnllacDe.includes(continuacio))
                    newState[continuacio] = ["a0Peu"]
            }
            else if (newState[continuacio]) // si hi ha la continuacio
                newState[continuacio] = [...newState[continuacio], enllac]
            else
                newState[continuacio] = [enllac]

            console.log("Add Continuacio " + continuacio, newState[continuacio])
            return newState
        })
    }

    const addContinuacionsBaranisMortals = () => {
        addContinuacio("a41", "a40")
        addContinuacio("a41", "c40")
        addContinuacio("a41", "p40")
        addContinuacio("c41", "a40")
        addContinuacio("c41", "c40")
        addContinuacio("c41", "p40")
        addContinuacio("p41", "a40")
        addContinuacio("p41", "c40")
        addContinuacio("p41", "p40")
    }

    const addContinuacionsMortalsBaranis = () => {
        addContinuacio("a40", "a41")
        addContinuacio("a40", "c41")
        addContinuacio("a40", "p41")
        addContinuacio("c40", "a41")
        addContinuacio("c40", "c41")
        addContinuacio("c40", "p41")
        addContinuacio("p40", "a41")
        addContinuacio("p40", "c41")
        addContinuacio("p40", "p41")

    }

    const EnllacElement = () => {

        const PerElement = ({ cont }) => {

            const times = continuacions[cont].reduce((prev, cur) => {
                prev[cur] = (prev[cur] || 0) + 1
                return prev
            }, {})


            return Object.keys(times).sort().map((e, i) => (

                <div className="my-1 d-flex flex-row justify-content-between" key={i}>
                    <div>
                        <Button variant="danger" size="sm" onClick={() => removeAllEnllac(cont, e)}>X</Button>
                        {" " + pe(e)}
                    </div>
                    <ButtonGroup size="sm" aria-label={i}>
                        <Button variant="secondary" disabled={times[e] < 2} onClick={() => removeEnllac(cont, e)}>-</Button>
                        <Button variant="secondary">{Math.round((times[e] * 100) / continuacions[cont].length) + "%"}</Button>
                        <Button variant="secondary" onClick={() => addContinuacio(cont, e)}>+</Button>
                    </ButtonGroup>
                </div>
            ))
        }



        /* for each element that is consecutive of another */
        return (
            Object.keys(continuacions).map((cont, i) =>
                <div className="mb-3" key={i}>
                    {(data[cont]) &&
                        <div>
                            <Button
                                variant="light"
                                onClick={() => toggleCheck("_open" + cont)}
                                aria-controls={"_open" + cont}
                                aria-expanded={data["_open" + cont]}
                            >
                                {pe(cont)} <FontAwesomeIcon icon={data["_open" + cont] ? faChevronUp : faChevronDown} size="sm" />
                            </Button>
                            <Collapse in={data["_open" + cont]}>
                                <div id={"_open" + cont}>
                                    <div className="card card-body">
                                        <PerElement cont={cont} />

                                        <div className="d-flex">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                                                    Afageix
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    {Object.keys(data).map((e, ii) => (
                                                        data[e] && elements[e] &&
                                                        <Dropdown.Item key={ii} onClick={() => console.log(addContinuacio(cont, e))}>{pe(e)}</Dropdown.Item>
                                                    ))}

                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Button size="sm" variant="danger" className="ms-1" onClick={() => removeContinuacio(cont)}>Elimina Enllaç</Button>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                        </div >
                    }
                </div >

            )
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("SUBMIT:")
        console.log(data)

        var exe = []



        const randomNum = (min, max) => { return Math.floor(Math.random() * (max - min)) }

        var elId = "-"

        const addOne = () => {
            // si no l'ha seleccionat
            if (!data[elId])
                return

            // si ja està a l'exercici
            if (!data["_repetirElements"])
                if (elId !== "a0Peu")
                    if (exe.includes(elId))
                        return

            // si no s'inicia amb les continuacions
            if (data["_noIniciAmbContinuacio"] && !continuacions[lastElId()])
                if (Object.keys(continuacions).filter((e) => !continuacions[e].includes(elId)).length !== Object.keys(continuacions).length)
                    return

            exe.push(elId)
            console.log(exe.length + " PUSH: " + elId)

            if (data["_botEntreMig"] && !continuacions[lastElId()] && exe.length < data["_Llargada"])
                exe.push("bot")
        }

        const selectElId = (list) => {
            return list[randomNum(0, list.length)]
        }

        const lastElId = () => {
            if (exe.length === 0)
                return "-"
            return exe[exe.length - 1]
        }

        for (var i = 0; exe.length < data["_Llargada"] && i < 500; i++) {
            //console.log(lastElId())
            if (continuacions[lastElId()])
                elId = selectElId(continuacions[lastElId()])
            else
                elId = selectElId(startElementIds)


            if (elId === undefined || elId === "qualsevol") {
                elId = selectElId(startElementIds)
            }

            console.log(i, elId)

            addOne()

        }

        setExercici(exe.map((id) => pe(id)))
    }

    const nElements = Object.keys(data).filter((e) => elements[e] && elements[e].name && data[e]).reduce((pr, cr) => cr = pr + 1, 0) - 2

    return (
        <div style={{ overflowY: "auto" }}>
            <Container>
                <div className=" " style={{ height: "100%", paddingTop: "10vh", paddingBottom: "10vh" }}>

                    <form id='contact-form' className="text-dark" onSubmit={handleSubmit} noValidate>

                        <Accordion defaultActiveKey="0">

                            <Accordion.Item eventKey={"Elements"} >
                                <Accordion.Header>Elements {nElements !== 0 && ("(" + nElements + ")")}</Accordion.Header>
                                <Accordion.Body>

                                    <InputBoxGroup groupName="Senzills" id="base" />
                                    <InputBox subelement id="agrupat" />
                                    <InputBox subelement id="cOb" />
                                    <InputBox subelement id="cT" />
                                    <InputBox subelement id="mGir" />
                                    <InputBox subelement id="Gir" />
                                    <InputBox subelement id="Sentat" />
                                    <InputBox subelement id="mGirSentat" />
                                    <InputBox subelement id="aPit" />
                                    <InputBox subelement id="esquena" />
                                    <InputBox subelement id="quinta" />
                                    <TRIOInputGroup groupName="Mortals endavant" tecGroupName="40" groupId="mortalsf" aId="a40f" cId="c40f" pId="p40f" />
                                    <TRIOInputGroup groupName="Mortals endarrera" tecGroupName="40." groupId="mortals" aId="a40" cId="c40" pId="p40" />

                                    <TRIOInputGroup groupName="Baranis" tecGroupName="41" groupId="baranis" aId="a41" cId="c41" pId="p41" />

                                    <InputBox id="piru" />
                                    <InputBox id="rdy" />
                                    <InputBox id="tresQuarts" />
                                    <InputBox id="mortalesq" />
                                    <InputBox id="tresQuartsf" />
                                    <InputBox id="mortaltq" />
                                    <TRIOInputGroup groupName="Baby" tecGroupName="51" groupId="babys" aId="a51" cId="c51" pId="p51" />
                                    <TRIOInputGroup groupName="Doble endarrera" tecGroupName="80" groupId="dobles" aId="a80" cId="c80" pId="p80" />
                                    <TRIOInputGroup groupName="Fiflis" tecGroupName="81" groupId="fiflis" aId="a81" cId="c81" pId="p81" />

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                        <Accordion>

                            <Accordion.Item eventKey="Configuració" >
                                <Accordion.Header>Configuració</Accordion.Header>
                                <Accordion.Body>
                                    {/* Llargada */}
                                    <Fragment>
                                        <span>
                                            Elements: {data["_Llargada"] || 1}
                                        </span>
                                        <Container>
                                            <div className="d-flex flex-row">
                                                <div className="px-1">1
                                                </div>
                                                <div className="px-1 flex-grow-1 ">
                                                    <FormRange
                                                        min={5}
                                                        max={30}
                                                        onChange={e => {
                                                            console.log(e.target.value)
                                                            setCheck("_Llargada", e.target.value)
                                                        }}
                                                        value={data["_Llargada"]}
                                                    />
                                                </div>
                                                <div className="px-1">30
                                                </div>
                                            </div>
                                        </Container>
                                    </Fragment>

                                    <InputBox name="Repetir elements" id="_repetirElements" />
                                    <InputBox name="Bot entre mig" id="_botEntreMig" />
                                    <InputBox name="No començar amb elements que s'enllacen" id="_noIniciAmbContinuacio" helper="Si hi ha un element a les continuacions, no començar amb aquest, es util quan s'enllacen baranis i mortals, per exemple" />
                                    <InputBox name="Noms tècnics" id="_tecNames" />

                                    <Button variant="primary" size="sm" className="mt-4" onClick={() => toggleCheck("_share")}>
                                        Comparteix
                                    </Button>
                                    <Modal
                                        show={data["_share"]}
                                        onHide={() => toggleCheck("_share")}
                                        size="xl"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Trampoli
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="d-flex justify-content-center">
                                            <Image src={qrImg} fluid/>
                                        </Modal.Body>
                                    </Modal>

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                        <Accordion>
                            <Accordion.Item eventKey="Enllaços">
                                <Accordion.Header>Enllaços</Accordion.Header>
                                <Accordion.Body>



                                    <div className="m-2"></div>

                                    {/* continuacions */}
                                    <EnllacElement />
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                                            Afageix
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {data["mortals"] && data["baranis"] &&
                                                <>
                                                    <Dropdown.Item onClick={() => addContinuacionsBaranisMortals()}>Baranis -{">"} Mortals</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => addContinuacionsMortalsBaranis()}>Mortals -{">"} Baranis</Dropdown.Item>
                                                </>
                                            }
                                            {Object.keys(data).map((e, ii) => (
                                                data[e] && elements[e] && !Object.keys(continuacions).includes(e) && e !== "qualsevol" &&
                                                <Dropdown.Item key={ii} onClick={() => addContinuacio(e, false)}>{pe(e)}</Dropdown.Item>
                                            ))}

                                        </Dropdown.Menu>
                                    </Dropdown>

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>




                        <div className="d-flex justify-content-center mt-3">
                            <button className='btn btn-success btn-lg w-50' type='submit'>
                                Generar Exercici!
                            </button>
                        </div>
                        {exercici &&
                            <Accordion className="mt-3 accordion w-100 text-dark" defaultActiveKey="0">

                                <AccordionItem title="Exercici" >
                                    <ol>
                                        {exercici.map((e, i) => (
                                            <li key={i}>
                                                {e}
                                            </li>
                                        ))}
                                    </ol>
                                </AccordionItem>

                            </Accordion>
                        }
                    </form>
                </div>
            </Container >
        </div >
    )
}

export default RutineGenerator