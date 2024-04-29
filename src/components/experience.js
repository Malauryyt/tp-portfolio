import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";


export function Experience(props) {
    const exp = props.exp
    return (
        <div className={props.mode == "on" ? "blocs container-lg" : "blocsDark container-lg"}>
            <Titre titre="Expériences" mode={props.mode} fctMode={props.fctMode} />

            <div class="d-flex flex-lg-row flex-sm-column  justify-content-center paragraphe flex-wrap">
                {exp.map((element) => {
                    return (
                        <div>
                            <CardB mode={props.mode} fctMode={props.fctMode} exp={element.titre} desc={element.desc} annee={element.date} />
                        </div>
                    )
                })}
            </div>


        </div>
    );
}

export default Experience;