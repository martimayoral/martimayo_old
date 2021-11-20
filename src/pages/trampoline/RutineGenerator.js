import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";

function RutineGenerator() {

    const groups = {
        base: ["agrupat", "cOb", "cT", "mGir", "Gir", "Sentat", "mGirSentat", "aPit", "esquena"],
        mortalsf: ["a40f", "c40f", "p40f"],
        mortals: ["a40", "c40", "p40"],
        baranis: ["a41", "c41", "p41"]
    }

    const [data, setData] = useState({

        base: false,

        agrupat: false,
        cOb: false,
        cT: false,
        mGir: false,
        Gir: false,
        Sentat: false,
        mGirSentat: false,
        aPit: false,
        esquena: false,
        aPeu: true,


        mortals: false,

        a40: false,
        c40: false,
        p40: false,

        mortalsf: false,

        a40f: false,
        c40f: false,
        p40f: false,

        baranis: false,

        a41: false,
        c41: false,
        p41: false,

        rdy: false,
        tresQuarts: false,

        repetirElements: false,
    })

    const elements = {
        base: {
            name: "Base",
            canEnd: true,
        },

        agrupat: {
            name: "Agrupat",
            canEnd: true,
        },
        cOb: {
            name: "Carpa Oberta",
            canEnd: true,
        },
        cT: {
            name: "Carpa Tancada",
            canEnd: true,
        },
        mGir: {
            name: "Mig gir",
            canEnd: true,
        },
        Gir: {
            name: "Gir Sencer",
            canEnd: true,
        },
        Sentat: {
            name: "Sentat",
            canEnd: true,
        },
        mGirSentat: {
            name: "Mig Gir Sentat",
            canEnd: true,
        },
        aPeu: {
            name: "A peu",
            canEnd: false,
        },
        aPit: {
            name: "A pit",
            canEnd: true,
        },
        esquena: {
            name: "Esquena",
            canEnd: true,
        },


        mortals: {
            name: "Mortals Enrere",
            canEnd: true,
        },

        a40: {
            name: "0",
            preName: "Mortal Enrere",
            canEnd: true,
        },
        c40: {
            name: "<",
            preName: "Mortal Enrere",
            canEnd: true,
        },
        p40: {
            name: "/",
            preName: "Mortal Enrere",
            canEnd: true,
        },

        mortalsf: {
            name: "Mortals Endavant",
            canEnd: true,
        },

        a40f: {
            name: "0",
            preName: "Mortal Endavant",
            canEnd: true,
        },
        c40f: {
            name: "<",
            preName: "Mortal Endavant",
            canEnd: true,
        },
        p40f: {
            name: "/",
            preName: "Mortal Endavant",
            canEnd: true,
        },

        baranis: {
            name: "Baranis",
            canEnd: true,
        },

        a41: {
            name: "0",
            preName: "Barani",
            canEnd: true,
        },
        c41: {
            name: "<",
            preName: "Barani",
            canEnd: true,
        },
        p41: {
            name: "/",
            preName: "Barani",
            canEnd: true,
        },

        rdy: {
            name: "Rudy",
            canEnd: true,
        },
        tresQuartsf: {
            name: "Tres quarts Endavant",
            canEnd: true,
        },
        tresQuarts: {
            name: "Tres quarts Enrere",
            canEnd: true,
        },



        repetirElements: { name: "Repetir elements" },
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
        "tresQuartsf",
        "tresQuarts",
    ]

    const [exercici, setExercici] = useState(null)

    const AccordionItem = ({ title, children, defaultOpen }) => {
        return (
            <Accordion.Item eventKey={title}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {children}
                </Accordion.Body>
            </Accordion.Item>
        )
    }

    const InputBox = ({ id, subelement }) => {

        return (
            <div className={"form-check " + (subelement ? " mx-1" : " mt-3")}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={elements[id].name}
                    id={"flexCheck" + id}
                    checked={data[id]}
                    onChange={() => toggleCheck(id)}
                />
                <label className="form-check-label" htmlFor={"flexCheck" + id}>
                    {elements[id].name}
                </label>
            </div>
        )
    }

    const toggleCheck = (inputName) => {
        setData((prevState) => {
            const newState = { ...prevState };
            newState[inputName] = !prevState[inputName];
            return newState;
        });
    };
    const setCheck = (inputName, value) => {
        setData((prevState) => {
            const newState = { ...prevState };
            newState[inputName] = value;
            return newState;
        });
    };

    const InputBoxGroup = ({ groupName, id }) => {
        const cId = id || groupName;

        const toggleGroup = (inputName) => {
            toggleCheck(inputName);
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
                <label className="form-check-label mx-3" htmlFor={"flexCheck" + cId}>
                    {groupName}
                </label>
            </div>
        )
    }

    const TRIOInputGroup = ({ groupName, groupId, aId, cId, pId }) => {
        return (
            <div className="d-flex align-items-center justify-content-between">
                <InputBoxGroup groupName={groupName} id={groupId} />
                <div className="d-flex align-items-center mt-3">
                    <InputBox subelement name="0" id={aId} />
                    <InputBox subelement name="<" id={cId} />
                    <InputBox subelement name="/" id={pId} />
                </div>
            </div>
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("SUBMIT:")
        console.log(data)

        var exe = [];



        const continuacions = {
            Sentat: ["mGirSentat", "aPit", "aPeu", "aPeu"],
            aPit: ["esquena", "aPeu", "aPeu", "aPeu"],
            mGirSentat: ["aPit", "aPeu", "aPeu"],
            tresQuarts: ["a40", "c40", "p40", "aPeu", "aPit", "aPeu"],
            tresQuartsf: ["a40", "c40", "p40", "aPeu", "aPit", "aPeu"],
            esquena: ["aPeu"]
        }

        const randomNum = (min, max) => { return Math.floor(Math.random() * (max - min)) }
        var elId;

        /* // inici
        for (var i = 0; (i < startElementIds.length * 2) && exe.length === 0; i++) {
            elId = startElementIds[randomNum(0, startElementIds.length)]
            if (data[elId]) {
                exe.push(elId)
            }
        }
        if (exe.length === 0) {
            setExercici(["HAS DE SELECCIONAR ALGUN ELEMENT D'INICI"])
            return
        } */

        var startNum = startElementIds.map((e) => data[e]).reduce((pr, cr) => cr & (pr + 1), 1)

        for (var i = 0; exe.length < 10 && i < 500; i++) {
            console.log(i)
            elId = startElementIds[randomNum(0, startElementIds.length)]
            if (data[elId] && ((data["repetirElements"] || !exe.includes(elId)))) {
                if (elements[elId].name) {
                    exe.push(elId)
                    console.log(exe.length + " PUSH: " + elId)

                    while (continuacions[elId]) {
                        console.log(elId + " HAS CONTINUATIONS: " + continuacions[elId])
                        if (exe.length < 9) {
                            var posElId = continuacions[elId][randomNum(0, continuacions[elId].length)]
                            if (data[posElId]) {
                                elId = posElId
                                exe.push(elId)
                                console.log(exe.length + " CPUSH: " + elId)
                            }
                        }
                        else{
                            exe.push("aPeu")
                            elId = "-"
                        }
                    }
                }

            }
        }
        /* 
                // fi
                for (var i = 0; (i < startElementIds.length * 2) && exe.length === 9; i++) {
                    var elId = startElementIds[randomNum(0, startElementIds.length)]
                    if (data[elId]) {
                        if (elements[elId].canEnd)
                            exe.push(elId)
                    }
                } */



        setExercici(exe.map((id) => (elements[id].preName || "") + " " + elements[id].name))
    }

    return (
        <Container style={{ overflowY: "auto" }}>
            <div className=" " style={{ height: "100vh", marginTop: "10vh" }}>

                <form id='contact-form' onSubmit={handleSubmit} noValidate>

                    <Accordion className="accordion w-100 text-dark" defaultActiveKey="0">

                        <AccordionItem title="Elements" >
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
                            <TRIOInputGroup groupName="Mortals endavant" groupId="mortalsf" aId="a40f" cId="c40f" pId="p40f" />
                            <TRIOInputGroup groupName="Mortals endarrera" groupId="mortals" aId="a40" cId="c40" pId="p40" />

                            <TRIOInputGroup groupName="Baranis" groupId="baranis" aId="a41" cId="c41" pId="p41" />

                            <InputBox id="rdy" />
                            <InputBox id="tresQuarts" />
                            <InputBox id="tresQuartsf" />

                        </AccordionItem>

                        <AccordionItem title="Configuració" >

                            <InputBox subelement name="Repetir elements base" id="repetirElements" />
                        </AccordionItem>

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
        </Container>
    )
}

export default RutineGenerator;