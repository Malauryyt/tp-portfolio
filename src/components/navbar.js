import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar(props) {

    const navItems = [
        ["Home", "/"],
        ["Projects", "/projects"],
        ["Contact", "/contact"]
    ]



    return (<>
        <nav class={props.mode == "on" ? "navbar navbar-expand-lg  shadow-sm navigation fixed-top" : "navbar navbar-expand-lg  shadow-sm navigation navigationDark fixed-top"}>
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
                        <FontAwesomeIcon icon={props.mode == "on" ? "fa-solid fa-moon" : " fa-solid fa-sun"} style={props.mode == "on" ? { color: "#000000", } : { color: "#FAF2EA", }} size="xl" onClick={() => { props.fctMode() }} />

                    </form>
                </div>
            </div>
        </nav >
        <div class="espaceNav">

        </div>
    </>
    )
}

export default NavBar;