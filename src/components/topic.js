import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar.js";
import ImageProfil from "../components/image.js";
import { Titre, TitreEnd, Paragraphe, Liste } from "../components/paragraphe.js";
import CardB from "../components/card.js";
import Competences from "../components/competence.js";
import Post from "../components/post.js";
import { getPost, deletePost, addPost, updatePost, getPostComment } from '../api/dummyApi.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export function Topic(props) {
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    //fct qui permet de nous connecter

    useEffect(() => {
        getPost()
            .then(data => {
                console.log("test : ", data);
                setPost(data.posts);

            }, []);

    }, []);
    //tres import de mettre le deuxieme param de use effect 


    useEffect(() => {
        console.log("post sdfbdfb : ", post)

        if (post.length > 0) {
            post.map((element) => {

                getPostComment(element.id)
                    .then(data => {

                        console.log("comment  zedcdcv: ", data);
                        let comments = comment;
                        comments.push({ id: element.id, data: data });
                        console.log("comments : ", comments);
                        setComment(comments);

                    });
            })
        }
    }, [post]);


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

            <div className='paragraphe'>
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
            </div>



            <div className='paragraphe'>
                <div class="accordion" id={"accordion"}>
                    {post.length > 0 && post.map((element, cpt) => {

                        return (
                            <Post element={element} delPost={delPost} uppPost={uppPost} key={cpt} />
                        )

                    })}
                </div>
            </div>
        </div>
    </>
    );
}



export default Topic;