import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";
import Projet from "../components/projet.js";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pouf from '../images/surlepouf.JPG'

import { motion, useScroll } from "framer-motion"
import { useSpring, animated } from '@react-spring/web'


export function ProjectPage(props) {

    const project = projects();

    const springs = useSpring({
        from: { x: 0 },
        to: { x: 30 },
        trans: [0, 1, 2],
    })




    return (<>
        <div className={props.mode == "on" ? "App " : "App AppDark"}>
            <header className="App-header">
                <NavBar mode={props.mode} fctMode={props.fctMode} />

                <animated.div
                    style={{
                        ...springs,
                    }}
                >
                    <Projet mode={props.mode} fctMode={props.fctMode} project={project} />
                </animated.div>



            </header>
        </div>

    </>);
}

// appel api
function projects() {

    return (
        [
            { titre: "Musique", desc: "Dans le cadre de mon parcours professionnel, j'ai entrepris un projet créatif visant à capturer et commémorer mes nombreux exploits et réalisations à travers la composition et l'enregistrement d'une musique originale. Cette initiative reflète ma passion pour l'expression artistique et ma volonté de documenter mes expériences de manière unique et mémorable.", lien: "https://suno.com/song/32024741-f372-4ae1-bd2f-65d87c932665" },
            { titre: "Marquage de territoire", desc: "Dans le cadre d'un projet personnel visant à établir et maintenir un contrôle total sur mon environnement domestique, j'ai entrepris une initiative de marquage de territoire. Ce projet consiste à imprégner tous les recoins de ma maison de mon odeur distinctive et à marquer physiquement ces espaces avec des signes de ma présence, tels que des petites crottes, pour affirmer ma souveraineté sur mon territoire." },
            { titre: "Entrainement intensif", desc: "Dans une démarche de développement personnel et d'affirmation de soi, j'ai pris l'initiative de m'engager dans un programme d'entraînement physique intense spécifiquement axé sur les compétences de combat. L'objectif principal de cette initiative est d'acquérir les compétences et la force nécessaires pour pouvoir défendre mon territoire et assurer ma position dominante en cas de confrontation avec mon père." },
            { titre: "Agent estival", desc: "Pendant les étés, j'ai eu l'opportunité d'assumer le rôle de tireur d'élite et de garde du corps informel lors des réceptions organisées par mes grands-parents pour leurs invités. Mes responsabilités comprenaient la vérification des véhicules des invités pour détecter d'éventuels produits illicites et veiller à leur sécurité en arrosant les invités lorsqu'il faisait trop chaud sous l'olivier." },
            { titre: "sdgfgf", desc: "sdgfgf" },
            { titre: "sdgfgf", desc: "sdgfgf" },
        ]

    )
}

export default ProjectPage;
