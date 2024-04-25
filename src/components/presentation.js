import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";


export function Presentation(props) {
    return (
        <div className={props.mode == "on" ? "blocs container-lg" : "blocsDark container-lg"}>
            <div class="row">
                <div class="col">
                    <ImageProfil url={props.url} />
                </div>
                <div class="col">
                    <Titre titre={props.nom} mode={props.mode} fctMode={props.fctMode} />
                    <Paragraphe text={props.paragraphe} mode={props.mode} fctMode={props.fctMode} />
                    <Liste tab={props.liste} mode={props.mode} fctMode={props.fctMode} />
                </div>
            </div>


        </div>
    );
}

export default Presentation;