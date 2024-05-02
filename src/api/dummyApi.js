
import React, { useState, useEffect } from 'react';



export async function connexionApi(username, password) {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: 30, // optional, defaults to 60
        })
    })
        // la on transforme en json 
        .then(res => res.json())
        .then(data => {
            return data;
        });
    // ce then la return la reponse
}

export async function getPost() {

    return fetch('https://dummyjson.com/posts?limit=10')
        .then(res => res.json())
        .then(data => {
            return data;
        });

}

export async function deletePost(id) {

    return fetch('https://dummyjson.com/posts/' + id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            return data.isDeleted;
        });
}

export async function addPost(title, id, body) {


    return fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            userId: id,
            body: body
            /* other post data */
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;

        });


}

export async function updatePost(title, id) {

    return fetch('https://dummyjson.com/posts/' + id, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;

        });


}

export async function getPostComment(id) {

    /* getting comments of posts id 1 */
    return fetch('https://dummyjson.com/posts/' + id + '/comments')
        .then(res => res.json())
        .then(data => {
            return data.comments;

        });
}



export default { connexionApi, getPost, deletePost, addPost, updatePost, getPostComment };


