import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Titre(props) {

    return (<>
        <div class="pTitre"> <h1 class="titre" >{props.titre} </h1></div>
    </>)

}

export function Paragraphe(props) {

    return (<>
        <div class="paragraphe"> {props.text} </div>
    </>)

}

export function Liste(props) {

    const liste = props.tab;

    return (
        <ul class="list-group listeGroup rounded-0">
            {liste.map((element) => {

                return (
                    < li class="nav - item m-1" >
                        <li class=""><span class="listeTitre">{element[0]} :</span> {element[1]}</li>
                    </li >
                )
            })}
        </ul>

    )
}

export default { Titre, Paragraphe, Liste }