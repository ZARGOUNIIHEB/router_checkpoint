import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from "./Movie";
import '../App.css';


const MovieInformation = () => {
    const { id } = useParams();
    const movieObject = Movie.find((el) => el.id === id);
    return (
        <div className="movieInfoDiv">
            <section className="movieInfo_SectionOne">
                <iframe width="100%" height="300px"
                    src={`${movieObject.trailerURL}I?&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </section>
            <section className="movieInfo_SectionTwo">
                <div className='firstUnder'>
                    <img className="imgPoster" src={movieObject.posterURL}></img>
                </div>
                <div className='secondUnder'>
                    <h1>{movieObject.title}</h1>
                    <p>{movieObject.description}</p>
                    <label>{movieObject.rating}</label>
                </div>
            </section>
        </div >
    );
}
export default MovieInformation;