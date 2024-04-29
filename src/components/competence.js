import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export function Competences(props) {
    const tab = props.tab;


    return (<>
        <div className={props.mode == "on" ? "blocs container-lg" : "blocsDark container-lg"} >
            <TitreEnd titre="Compétences" mode={props.mode} fctMode={props.fctMode} />
            <div class="d-flex flex-row mb-3 justify-content-center  flex-wrap paragraphe">

                {tab.map((element, cpt) => {

                    return (<>
                        <div>
                            <OverlayTrigger
                                key='top'
                                placement='top'
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        {element[1]}
                                    </Tooltip>
                                }
                            >
                                <div className={props.mode == "on" ? "m-4 p-2 rounded-circle competence d-flex justify-content-center align-items-center competence animation" : " m-4 p-2 rounded-circle competence d-flex justify-content-center align-items-center competenceDark animation"}>
                                    <FontAwesomeIcon icon={element[0]} size="2xl" style={props.mode == "on" ? { color: "#392E2C", } : { color: "#FAF2EA", }} className='iconeComp' />
                                </div>
                            </OverlayTrigger >

                        </div>
                    </>)
                })}

            </div >
        </div >
    </>
    )
}

export default Competences;