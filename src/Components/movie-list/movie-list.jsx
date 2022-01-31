import React from 'react'
import './movie-list.css'

import { MovieContainer } from '../movie-container/movie-container'
import { useHistory } from 'react-router'

import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'

import DeleteIcon from '@mui/icons-material/Delete'

import EditIcon from '@mui/icons-material/Edit'
import {API} from '../../global.js'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  const getMovies=() => {
    fetch(`${API}/movies`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setMovies(data))
  }
  useEffect(getMovies, [])

  const history = useHistory()

  const deleteMovie = (_id) => {

    fetch(`${API}/movies/${_id}`,{method:'Delete'})
    .then(()=>getMovies())
    
  }
  return (
    <div className="movie-list">
      {movies.map(({ _id, name, poster, summary, rating }, index) => (
        <MovieContainer
          _id={_id}
          name={name}
          poster={poster}
          summary={summary}
          rating={rating}
          deleteButton={
            <IconButton aria-label="delete" color="error" size="large">
              <DeleteIcon color="error" onClick={() => deleteMovie(_id)} />
            </IconButton>
          }
          editButton={
            <IconButton aria-label="edit" color="secondary" size="large">
              <EditIcon
                color="secondary"
                onClick={() => history.push(`/movie-edit/${_id}`)}
              />
            </IconButton>
          }
        />
      ))}
    </div>
  )
}
