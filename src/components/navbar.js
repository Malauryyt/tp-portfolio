import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar() {

    const navItems = [
        ["Home", "/"],
        ["About", "/about"],
        ["Projects", "/projects"],
        ["Contact", "/contact"]
    ]

    const [lightmode, setLightmode] = useState('on');

    const changeMode = () => {
        if (lightmode == "on") {
            setLightmode("off");
        }
        else {
            setLightmode("on");
        }
    };

    return (<>
        <nav class="navbar navbar-expand-lg  shadow-sm navigation">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                        {navItems.map((element) => {
                            return (
                                < li class="nav - item" >
                                    < a class="nav-link active" href={element[1]} > {element[0]}</a >
                                </li >
                            )
                        })}
                    </ul>
                    <form class="d-flex" role="search">
                        <FontAwesomeIcon icon={lightmode == "on" ? "fa-solid fa-sun" : "fa-solid fa-moon"} size="xl" onClick={() => { changeMode() }} />
                    </form>
                </div>
            </div>
        </nav>
    </>
    )
}

export default NavBar;