import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {API} from '../../global.js'

export const MovieInfo=()=>
{

    const {id}=useParams()

    const [movie,setMovie]=useState({})

    useEffect(()=>{

      fetch(`${API}/movies/${id}`,{method:'Get'})
      .then(response=>response.json())
      .then(data=>setMovie(data))

    },[])

    return(

  
        <div className='movie-container'>
        <h3>{movie.moviename} </h3>
          <h5> 🌟{movie.rating}</h5>
          <p>{movie.summary}</p>

        </div>
        
        
    )
}