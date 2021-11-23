import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


export const MovieInfo=()=>
{

    const {id}=useParams()

    const [movie,setMovie]=useState({})

    useEffect(()=>{

      fetch(`https://61988da3164fa60017c230e3.mockapi.io/movies/${id}`,{method:'Get'})
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