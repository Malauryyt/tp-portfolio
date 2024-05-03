import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar(props) {

    const navItems = [
        { page: "Home", redirect: "/" },
        { page: "Projects", redirect: "/projects" },
        { page: "Blog", redirect: "/blog" },

    ]

    // scroll
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (<>
        <header className="App-header">
            <nav className={props.mode == "on" ? `navbar navbar-expand-lg  shadow-sm navigation fixed-top ${scrollPosition && 'scrolled'}` : "navbar navbar-expand-lg  shadow-sm navigation navigationDark fixed-top"}>
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
                            <FontAwesomeIcon icon={props.langue == "fr" ? "fa-solid fa-flag" : "fa-solid fa-flag-usa"} style={props.mode == "on" ? { color: "#000000", } : { color: "#FAF2EA", }} size="xl" onClick={() => { props.fctLangue() }} className='me-3' />
                            < FontAwesomeIcon icon={props.mode == "on" ? "fa-solid fa-moon" : " fa-solid fa-sun"} style={props.mode == "on" ? { color: "#000000", } : { color: "#FAF2EA", }} size="xl" onClick={() => { props.fctMode() }} />

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