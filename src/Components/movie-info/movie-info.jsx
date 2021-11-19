import React from 'react'
import { useParams } from 'react-router'


export const MovieInfo=({movies})=>
{

    const {movieid}=useParams()

    const movie=movies[movieid]

    return(

  
        <div className='movie-container'>
        <h3>{movie.moviename} </h3>
          <h5> 🌟{movie.rating}</h5>
          <p>{movie.summary}</p>

        </div>
        
        
    )
}