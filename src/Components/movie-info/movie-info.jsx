import React from 'react'
import { useParams } from 'react-router'


export const MovieInfo=({moviesList})=>
{

    const {movieid}=useParams()

    const movie=moviesList[movieid]

    return(

        
        <div className='movie-container'>
        <img src={movie.poster} alt={movie.moviename} />
        <h3>{movie.moviename} </h3>
          <h5>{movie.rating}</h5>
          <p>{movie.summary}</p>
        </div>
       
        
    )
}