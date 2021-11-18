import React, { useState } from 'react'
import './movie-container.css'

import { LikeDislike } from '../like-dislike/like-dislike'
import { useHistory } from 'react-router'

export const MovieContainer=({index,movie,deleteButton})=>{

    const [show,setShow]=useState(true)

    const toggle=()=>
    {
        setShow(!show)
    }

    const history=useHistory();
    return(

        <div className='movie-container'>
        <img src={movie.poster} alt={movie.moviename} />
        <h3>{movie.moviename}
        <button onClick={toggle}>{show ? 'Hide' : 'Display'}</button>
        {movie.rating}
        </h3>
        <button onClick={()=>history.push(`/movie-info/${index}`)}>Movie Info</button>

        {show? <p>{movie.summary}</p> : ''}
       
        <LikeDislike/>
      
        </div>
    )
}