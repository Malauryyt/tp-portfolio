import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pouf from '../images/surlepouf.JPG'

import { motion, useScroll } from "framer-motion"
import { useSpring, animated } from '@react-spring/web'


export function ProjectPage() {

    const [lightmode, setLightmode] = useState('on');
    useEffect(() => { sessionStorage.setItem("mode", "light"); })
    const changeMode = () => {
        if (lightmode == "on") {
            setLightmode("off");
            sessionStorage.setItem("mode", "dark");
        }
        else {
            setLightmode("on");
            sessionStorage.setItem("mode", "light");
        }
    };


    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    })


    return (<>
        <div className={lightmode == "on" ? "App" : "App AppDark"}>
            <header className="App-header">
                <NavBar mode={lightmode} fctMode={changeMode} />


                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...springs,
                    }}
                />


            </header>
        </div>

    </>);
}

// appel api

export default ProjectPage;
