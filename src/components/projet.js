import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";


export function Projet(props) {

    const projet = props.project;



    return (<>
        <div className={props.mode == "on" ? "blocs container-lg" : "blocsDark container-lg"}>
            <Titre titre="Projets" mode={props.mode} fctMode={props.fctMode} />

            <div className='d-flex flex-row mb-3 justify-content-center  flex-wrap paragraphe'>

                {projet.map((element, cpt) => {
                    return (
                        <div className={props.mode == "on" ? "card m-3 cardProject shadow animation" : "card m-3 cardProjectDark shadow animation"}  >

                            <div class="card-body d-flex flex-column justify-content-between">
                                <h5 class="card-title">{element.titre}</h5>
                                <p className={props.mode == "on" ? "card-text stylePara overflow-auto" : "card-text styleParaDark overflow-auto"}>{element.desc}</p>
                                <div>
                                    <span className={props.mode == "on" ? "float-end text" : "float-end textDark"}> {props.annee}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </>
    );
}

export default Projet;