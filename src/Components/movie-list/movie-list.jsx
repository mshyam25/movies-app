import React from 'react'
import './movie-list.css'

import { MovieContainer } from '../movie-container/movie-container'
import { useHistory } from 'react-router'

import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'

import DeleteIcon from '@mui/icons-material/Delete'

import EditIcon from '@mui/icons-material/Edit'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  const getMovies=() => {
    fetch('https://61a8d5f233e9df0017ea3b8e.mockapi.io/movies', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setMovies(data))
  }
  useEffect(getMovies, [])

  const history = useHistory()

  const deleteMovie = (id) => {

    fetch(`https://61a8d5f233e9df0017ea3b8e.mockapi.io/movies/${id}`,{method:'Delete'})
    .then(()=>getMovies())
    
  }
  return (
    <div className="movie-list">
      {movies.map(({ id, moviename, poster, summary, rating }, index) => (
        <MovieContainer
          id={id}
          moviename={moviename}
          poster={poster}
          summary={summary}
          rating={rating}
          deleteButton={
            <IconButton aria-label="delete" color="error" size="large">
              <DeleteIcon color="error" onClick={() => deleteMovie(id)} />
            </IconButton>
          }
          editButton={
            <IconButton aria-label="edit" color="secondary" size="large">
              <EditIcon
                color="secondary"
                onClick={() => history.push(`/movie-edit/${id}`)}
              />
            </IconButton>
          }
        />
      ))}
    </div>
  )
}
