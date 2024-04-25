import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";


export function Experience(props) {
    return (
        <div className={props.mode == "on" ? "blocs container-lg" : "blocsDark container-lg"}>
            <Titre titre="Expériences" mode={props.mode} fctMode={props.fctMode} />

            <div class="d-flex flex-row-reverse paragraphe">
                {props.exp.map((element) => {
                    return (
                        <div>
                            <CardB mode={props.mode} fctMode={props.fctMode} exp={element[1]} desc={element[2]} annee={element[0]} />
                        </div>
                    )
                })}
            </div>


        </div>
    );
}

export default Experience;