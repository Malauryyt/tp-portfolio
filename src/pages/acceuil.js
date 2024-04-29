import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";
import Presentation from '../components/presentation.js';
import Experience from '../components/experience.js';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pouf from '../images/surlepouf.JPG'
import { useSpring, animated } from '@react-spring/web'


export function ApiPage(props) {

    const nom = getNom();
    const url = pouf;
    const paragraphe = getPresentation();
    const liste = getListePres();
    const exp = getExp();

    // animation
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 30 },
        trans: [0, 1, 2],
    })
    const test = useSpring({
        from: { x: 30 },
        to: { x: 0 },
        trans: [0, 1, 2],
    })

    return (
        <div className={props.mode == "on" ? "App" : "App AppDark"}>

            <NavBar mode={props.mode} fctMode={props.fctMode} />
            <animated.div
                style={{
                    ...springs,
                }}
            >
                <Presentation mode={props.mode} fctMode={props.fctMode} nom={nom[0].nom} url={url} paragraphe={paragraphe[0]} liste={liste} />
            </animated.div>

            <animated.div
                style={{
                    ...test,
                }}
            >
                <Experience mode={props.mode} fctMode={props.fctMode} exp={exp} />
            </animated.div>


            <Competences tab={getComp()} mode={props.mode} fctMode={props.fctMode} />

        </div>
    );
}

// appel api

function getNom() {
    return (
        [
            { nom: "Zazou Lahaye" }
        ]
    );
}

function getPresentation() {
    const pres = `Bonjour tout le monde! Je m'appelle Zazou, et je suis le lapin le plus mignon et espiègle que vous rencontrerez jamais !
        
    Je suis bien plus qu'un simple lapin. Je suis une boule de joie, de câlins et de folie. Avec moi, chaque jour est une aventure remplie de rires et d'amour. Alors, pourquoi ne pas m'ajouter à votre vie pour un peu plus de bonheur et de chaos bienvenu ?
    `
    return (
        [
            { pres: pres }
        ]
    )
}

function getListePres() {
    //{"Âge", k: "3 ans"}
    return [
        { titre: "Âge", desc: "3 ans" },
        { titre: "Passions", desc: "Manger des bananes et dormir" },
        { titre: "Aliment préféré", desc: "Les bananes, je pourrais en manger toute la journée !" },
        { titre: "Qualité", desc: "Très investie, perséverant" },
        { titre: "Musique", desc: "https://suno.com/song/32024741-f372-4ae1-bd2f-65d87c932665" },
    ]
}

function getExp() {
    const text = ` Étude Approfondie de l'Environnement :
     Ai entrepris une exploration exhaustive et méticuleuse de tous les recoins de la maison familiale et du jardin, démontrant une connaissance inégalée des lieux.

    Établissement de Zones de Fuite Stratégiques: 
    Avec ingéniosité, ai identifié et établi deux zones de fuite principales : la porte d'entrée principale et l'accès au vide sanitaire. Ces zones ont été soigneusement sélectionnées pour leur accessibilité et leur efficacité en cas de nécessité.`

    const exp2 = `Démolition Stratégique: 
    J'ai orchestré avec ruse et détermination la désintégration calculée du papier peint et des combles, utilisant mes compétences maquiavéliques pour mener à bien cette tâche.

    Contournement des Barrières Protectrices: 
    J'ai habilement infiltré et outrepassé toutes les défenses érigées, démontrant une ingéniosité diabolique pour déjouer les obstacles et atteindre mes objectifs.

    Exploration des Plaisirs Interdits: 
    J'ai osé explorer les territoires interdits, incluant la savoureuse dégustation du tapis et des câbles électriques, révélant ainsi ma capacité à repousser les limites de l'interdit avec un flair audacieux.`

    const exp3 = `Attaque Hybride sur les Infrastructures Internes: 
    J'ai orchestré une campagne de terreur sans précédent en utilisant des tactiques de guérilla psychologique, comprenant le marquage de territoire par des actes d'une audace sans égale tels que faire pipi sur le tapis et disperser des petites crottes stratégiquement.

    Instauration d'un Règne de Terreur: 
    Par mes actions impitoyables, j'ai étendu mon pouvoir et ma domination sur l'ensemble du foyer, terrorisant non seulement mes compagnons de maison, mais aussi mon propre père, instaurant un climat de peur et de soumission, même dans les ténèbres de la nuit.`
    return [
        { date: "septembre 2022 - ?? ", titre: "Expert en Domination et en Subversion Psychologique", desc: exp3 },
        { date: "Juin 2022 - septembre 2022", titre: "Explorateur en Chef et Maître de l'Évasion", desc: text },
        { date: "Octobre 2021 - juin 2022", titre: "Architecte de la Déconstruction et Maître de la Subversion", desc: exp2 },


    ]
}

function getComp() {

    return (
        [
            ['fa-solid fa-poo', 'Crotteur expert '],
            ['fa-solid fa-face-smile', 'Amadoueur'],
            ['fa-solid fa-user-secret', " Espion"],
            ["fa-solid fa-hand-holding-heart", "Calins infinis"],
            ["fa-solid fa-clock", "Horloge interne"],
            ["fa-solid fa-masks-theater", "acteur"],
            ["fa-solid fa-eye", "vision nocturne"]

        ]

    )
}

