import React, { useState } from 'react'
import './movie-container.css'

import { LikeDislike } from '../like-dislike/like-dislike'
import { useHistory } from 'react-router'

import InfoIcon from '@mui/icons-material/Info'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export const MovieContainer = ({ id,moviename,poster,summary,rating, deleteButton, editButton }) => {
  const [show, setShow] = useState(true)

  const toggle = () => {
    setShow(!show)
  }

  const history = useHistory()
  return (
    <div className="movie-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={poster}
          alt={moviename}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <div className='header'>
          <div> {moviename}
          <IconButton
            color="primary"
            aria-label="movie-info"
            onClick={toggle}
          >
            {!show ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton></div>
         
            🌠{rating}
          </div>
            
          </Typography>
          <div className="icon-group">
            <IconButton color="primary" aria-label="movie-info">
              <InfoIcon
                color="primary"
                onClick={() => history.push(`/movie-info/${id}`)}
              />
            </IconButton>
            {editButton}
            {deleteButton}
          </div>
          <Typography variant="body2" color="text.secondary">
            {show ? <p>{summary}</p> : ''}
          </Typography>
        </CardContent>
        <CardActions>
          <LikeDislike />
        </CardActions>
      </Card>
    </div>
  )
}
