import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from "./Movie";


const MovieInformation = () => {
    const { id } = useParams();
    const movieObject = Movie.find((el) => el.id === id);
    return (
        <div>
            {/* <p>{movieObject.id}</p>
            <p>{movieObject.title}</p>
            <p>{movieObject.description}</p>
            <img src={movieObject.posterURL}></img>
            <p> {movieObject.rating}</p>
            <p>{movieObject.checked}</p> */}
            <iframe width="560" height="315"
                src={`${movieObject.trailerURL}I?&autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

            </iframe>
        </div >
    );
}
export default MovieInformation;