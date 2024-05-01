import React, { useState, useEffect } from 'react';
import { ApiPage } from './acceuil.js';
import ProjectPage from './project.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from './blog.js';

export default function Browser() {

    const [lightmode, setLightmode] = useState('on');
    useEffect(() => { sessionStorage.getItem("mode") == null ? sessionStorage.setItem("mode", "on") : setLightmode(sessionStorage.getItem("mode")); })
    const changeMode = () => {
        if (lightmode == "on") {
            setLightmode("off");
            sessionStorage.setItem("mode", "off");
        }
        else {
            setLightmode("on");
            sessionStorage.setItem("mode", "on");
        }
    };

    const [token, setToken] = useState("");
    useEffect(() => { if (sessionStorage.getItem("token") != null) setToken(sessionStorage.getItem("token")); })
    const changeToken = (jwtToken) => {
        setToken(jwtToken);
        sessionStorage.setItem("token", jwtToken);
    };



    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ApiPage mode={lightmode} fctMode={changeMode} />} />
                <Route path="/projects" element={<ProjectPage mode={lightmode} fctMode={changeMode} />} />
                <Route path="/blog" element={<BlogPage mode={lightmode} fctMode={changeMode} changeToken={changeToken} token={token} />} />
            </Routes>
        </BrowserRouter>
    </>
    )

}