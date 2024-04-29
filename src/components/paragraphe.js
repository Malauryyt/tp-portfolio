import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Titre(props) {

    return (<>
        <div class="pTitre" > <h1 className={props.mode == "on" ? "titre" : "titreDark"} >{props.titre} </h1></div>
    </>)

}
export function TitreEnd(props) {

    return (<>
        <div class="pTitre text-end" > <h1 className={props.mode == "on" ? "titre" : "titreDark"} >{props.titre} </h1></div>
    </>)

}

export function Paragraphe(props) {

    return (<>
        <div className={props.mode == "on" ? "paragraphe" : "paragrapheDark"}> {props.text} </div>
    </>)

}

export function Liste(props) {

    const liste = props.tab;

    return (
        <ul className={props.mode == "on" ? "list-group listeGroup rounded-0" : "list-group listeGroupDark rounded-0"}>
            {liste.map((element) => {

                return (
                    < li class="nav - item m-1" >
                        <li class=""><span className={props.mode == "on" ? "listeTitre" : "listeTitreDark"} >{element.titre} :</span> {element.desc}</li>
                    </li >
                )
            })}
        </ul>

    )
}

export default { Titre, Paragraphe, Liste, TitreEnd }