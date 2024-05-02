import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";
import { getPost, deletePost, addPost, updatePost, getPostComment } from '../api/dummyApi.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Post(props) {
    const [comment, setComment] = useState([]);
    const element = props.element;
    //fct qui permet de nous connecter

    useEffect(() => {

        getPostComment(element.id)
            .then(data => {

                console.log("comment  zedcdcv: ", data);
                setComment(data);

            });

    }, []);
    //tres import de mettre le deuxieme param de use effect 


    return (<>

        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + element.id} aria-expanded="false" aria-controls={"collapse" + element.id}>
                    {element.title}
                </button>
            </h2>
            <div id={"collapse" + element.id} class="accordion-collapse collapse" data-bs-parent="#accordion">
                <div class="accordion-body">
                    <div>
                        <p>{element.body} </p>
                    </div>
                    <div className='d-flex flex-row-reverse'>
                        <div>
                            <span className='iconPost'><FontAwesomeIcon icon="fa-solid fa-pencil" size="lg" onClick={() => { props.uppPost(element.id, element.title) }} /> </span>
                            <span className='iconPost'><FontAwesomeIcon icon="fa-solid fa-trash" size="lg" onClick={() => { props.delPost(element.id) }} /> </span>
                        </div>

                    </div>

                    {comment.length > 0 && comment.map((com, cpt) => {
                        return (
                            <div>
                                <p className='stylePara'>{com.body} </p>

                            </div>
                        )

                    })}


                </div>
            </div>

        </div>


    </>
    );
}



export default Post;