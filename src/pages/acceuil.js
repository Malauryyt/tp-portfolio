import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pouf from '../images/surlepouf.JPG'


export function ApiPage() {

    const nom = getNom();
    const url = pouf;
    const paragraphe = getPresentation();
    const liste = getListePres();
    const exp = getExp();

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <div class="blocs container-lg">
                    <div class="row">
                        <div class="col">
                            <ImageProfil url={url} />
                        </div>
                        <div class="col">
                            <Titre titre={nom} />
                            <Paragraphe text={paragraphe} />
                            <Liste tab={liste} />
                        </div>
                    </div>


                </div>
                <div class="blocs container-lg">
                    <Titre titre="Expérience" />

                    <div class="d-flex flex-row-reverse paragraphe">
                        {exp.map((element) => {
                            return (
                                <div>
                                    <CardB exp={element[1]} desc={element[2]} annee={element[0]} />
                                </div>
                            )
                        })}
                    </div>


                </div>


            </header>
        </div>
    );
}

// appel api

function getNom() {
    return "Zazou Lahaye";
}

function getPresentation() {
    return (
        `Bonjour tout le monde! Je m'appelle Zazou, et je suis le lapin le plus mignon et espiègle que vous rencontrerez jamais !
        
        Je suis bien plus qu'un simple lapin. Je suis une boule de joie, de câlins et de folie. Avec moi, chaque jour est une aventure remplie de rires et d'amour.Alors, pourquoi ne pas m'ajouter à votre vie pour un peu plus de bonheur et de chaos bienvenu ?
        `
    )
}

function getListePres() {
    return [
        ["Âge", "3 ans"],
        ["Passions", "Manger des bananes et dormir"],
        ["Aliment préféré", "Les bananes, je pourrais en manger toute la journée!"],
        ["Qualité", "Très investie, perséverant"],
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
        ["Octobre 2021 - juin 2022", "Architecte de la Déconstruction et Maître de la Subversion", exp2],
        ["Juin-septembre 2022", "Explorateur en Chef et Maître de l'Évasion", text],
        ["septembre 2022 - ?? ", "Expert en Domination et en Subversion Psychologique", exp3],
    ]
}

