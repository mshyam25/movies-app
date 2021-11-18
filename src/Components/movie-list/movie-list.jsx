import React from 'react'
import './movie-list.css'

import { MovieContainer } from '../movie-container/movie-container'

import {useHistory} from 'react-router-dom'

export const MovieList=({moviesList,setMovies})=> {

    const history=useHistory()

    const deleteMovie=(index)=>
    {
        const deleteIndex=index
        const updatedMoviesList=moviesList.filter((movie,index)=>index!==deleteIndex)

        // setMovies([...updatedMoviesList])

        history.push('/movies')
         
    }

    return(
<div className='movie-list'>



{moviesList.map((movie,index)=> <MovieContainer index={index} movie={movie} 


deleteButton={<button onClick={()=> deleteMovie(index)}>Delete</button>}



/>)}
</div>

    )
}