import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";
import Projet from "../components/projet.js";
import Connexion from '../components/connexion.js';
import Topic from '../components/topic.js';
import { connexionApi } from '../api/dummyApi.js';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pouf from '../images/surlepouf.JPG'

import { motion, useScroll } from "framer-motion"
import { useSpring, animated } from '@react-spring/web'


export function BlogPage(props) {



    const springs = useSpring({
        from: { x: 0 },
        to: { x: 30 },
        trans: [0, 1, 2],
    })

    console.log("props : ", props.token)

    return (<>
        <div className={props.mode == "on" ? "App " : "App AppDark"}>
            <header className="App-header">
                <NavBar mode={props.mode} fctMode={props.fctMode} />

                <animated.div
                    style={{
                        ...springs,
                    }}
                >
                    {props.token == "" ? <Connexion mode={props.mode} fctMode={props.fctMode} changeToken={props.changeToken} /> : <Topic mode={props.mode} fctMode={props.fctMode} />}

                </animated.div>



            </header>
        </div>

    </>);
}


export default BlogPage;
