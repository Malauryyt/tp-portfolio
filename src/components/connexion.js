import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";
import { connexionApi } from '../api/dummyApi.js';


export function Connexion(props) {

    //fct qui permet de nous connecter
    const Con = () => {
        connexionApi(document.getElementById('username').value, document.getElementById('exampleInputPassword1').value)
            .then(data => {
                console.log("data : ", data);
                props.changeToken(data.token);
            });

    };

    return (<>
        <div className={props.mode == "on" ? "blocs container-lg" : "blocsDark container-lg"}>
            <Titre titre="Connexion" mode={props.mode} fctMode={props.fctMode} />
            <div className='paragraphe'>


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" aria-describedby="username" />
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button class="btn btn-primary" onClick={Con}>Submit</button>
            </div>
        </div>
    </>
    );
}



export default Connexion;