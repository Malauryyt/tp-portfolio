import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar(props) {

    const navItems = [
        { page: "Home", redirect: "/" },
        { page: "Projects", redirect: "/projects" },
        { page: "Contact", redirect: "/contact" },
        { page: "Blog", redirect: "/blog" },

    ]



    return (<>
        <header className="App-header">
            <nav class={props.mode == "on" ? "navbar navbar-expand-lg  shadow-sm navigation fixed-top" : "navbar navbar-expand-lg  shadow-sm navigation navigationDark fixed-top"}>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                            {navItems.map((element) => {
                                return (
                                    < li class="nav - item" >
                                        < a class="nav-link active" href={element.redirect} > {element.page}</a >
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
        </header >
    </>
    )
}

export default NavBar;