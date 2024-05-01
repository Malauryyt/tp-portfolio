import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";
import { getPost, deletePost, addPost, updatePost } from '../api/dummyApi.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Topic(props) {
    const [post, setPost] = useState([]);
    //fct qui permet de nous connecter
    useEffect(() => {
        getPost()
            .then(data => {
                console.log("test : ", data);
                setPost(data.posts);

            });

    }, []);

    useEffect(() => {
        console.log("post : ", post)
    }, [post])


    const [error, setError] = useState("");
    const ajoutPost = () => {

        const title = document.getElementById('postname').value;
        const body = document.getElementById('bodypost').value;

        if (title == "" || body == "") {
            setError("incomplet");
        } else {
            addPost(title, 1, body)
                .then(data => {
                    console.log("ajout post : ", data);
                    if (data.id > 0) {
                        setError("add");
                    }
                    else {
                        setError("error");
                    }

                });
        }

    }

    const delPost = (id) => {


        deletePost(id)
            .then(data => {
                console.log("suppression post : ", data);
                if (data == true) {
                    setPost(post.filter(a => a.id !== id));
                }
            });

    }


    const uppPost = (id, title) => {

        updatePost(title, id)
            .then(data => {
                console.log("update post : ", data);
                // if (data.message != "") { si on a une err ca fait un data.message = " erreur blabalbalabla"
                //     setPost(post.filter(a => a.id !== id));
                // }
            });

    }


    return (<>
        <div className={props.mode == "on" ? "blocs container-lg" : "blocsDark container-lg"}>
            <Titre titre="Blog" mode={props.mode} fctMode={props.fctMode} />

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Post name</label>
                <input type="email" class="form-control" id="postname" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description post</label>
                <textarea class="form-control" id="bodypost" rows="3"></textarea>
            </div>
            <div className='mb-3'>
                {error == "add" && <div class="alert alert-success" role="alert">
                    Post ajouté avec succès.
                </div>
                }
                {error == "incomplet" && <div class="alert alert-danger" role="alert">
                    Vous devez remplir tous les champs.
                </div>
                }
                {error == "error" && <div class="alert alert-danger" role="alert">
                    Une erreur c'est produite lors de l'ajout du post.
                </div>
                }
            </div>
            <button type="submit" class="btn btn-primary " onClick={() => { ajoutPost() }} >Ajouter </button>




            <div className='paragraphe'>
                <div class="accordion" id={"accordion"}>
                    {post.length > 0 && post.map((element, cpt) => {

                        return (

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
                                                <span className='iconPost'><FontAwesomeIcon icon="fa-solid fa-pencil" size="lg" onClick={() => { uppPost(element.id, element.title) }} /> </span>
                                                <span className='iconPost'><FontAwesomeIcon icon="fa-solid fa-trash" size="lg" onClick={() => { delPost(element.id) }} /> </span>
                                            </div>

                                        </div>




                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
    );
}



export default Topic;