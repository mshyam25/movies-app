import React from 'react'
import './movie-list.css'

import { MovieContainer } from '../movie-container/movie-container'
import { useHistory } from 'react-router'


import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';



export const MovieList = ({movies,setMovies }) => {
    
const history=useHistory()

  const deleteMovie=(index)=>{

    const delindex=index

    const remMovies=movies.filter((movie,index)=>delindex!==index)
     setMovies([...remMovies])

     history.push('/')
  }
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieContainer index={index} movie={movie}
        
        deleteButton={
          <IconButton aria-label="delete" color="error"  size="large" >
          <DeleteIcon color='error' onClick={()=>deleteMovie(index)}/>
        </IconButton>
        }
       
        editButton={
          <IconButton aria-label="edit" color="secondary"  size="large" >
          <EditIcon  color='secondary' onClick={()=>history.push(`/movie-edit/${index}`)} />
          </IconButton>
          
          }
        


        />
      ))}
    </div>
  )
}
