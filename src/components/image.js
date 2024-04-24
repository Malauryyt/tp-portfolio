import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ImageProfil(props) {
    return (
        <img src={props.url} class="rounded float-start imgProfil" ></img>

    )

}