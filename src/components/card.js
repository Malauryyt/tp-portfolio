import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../index.css"

export function CardB(props) {

    return (<>
        <div className={props.mode == "on" ? "card cardPerso shadow m-2" : "card cardPersoDark shadow m-2"} >
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{props.exp}</h5>
                <p className={props.mode == "on" ? "card-text stylePara overflow-auto" : "card-text styleParaDark overflow-auto"} >{props.desc}</p>
                <div>
                    <span className={props.mode == "on" ? "float-end text" : "float-end textDark"}> {props.annee}</span>
                </div>
            </div>
        </div>
    </>
    )

}

export default CardB;