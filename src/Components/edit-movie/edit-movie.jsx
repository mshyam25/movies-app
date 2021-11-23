import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './edit-movie.css'

export const EditMovie = () => {
  const { id } = useParams()
  // const movie=movies[movieid]
  
  const [movie, setMovie] = useState(null)
  // 

  useEffect(()=>{

    fetch(`https://61988da3164fa60017c230e3.mockapi.io/movies/${id}`,{method:'Get'})
    .then(response=>response.json())
    .then(data=>setMovie(data))

  },[])

  return ( 
<div>
{movie ? <UpdateMovie movie={movie}/> : '' }
</div>
    
  )
  


function UpdateMovie({movie})
{

  const history = useHistory()
  const [moviename, setMoviename] = useState(movie.moviename)
  const [poster, setPoster] = useState(movie.poster)
  const [summary, setSummary] = useState(movie.summary)
  const [rating, setRating] = useState(movie.rating)

  const updatedMovie={moviename,poster,summary,rating}

  const editMovie = () => {

    fetch(`https://61988da3164fa60017c230e3.mockapi.io/movies/${id}`,
    {method:'PUT',
body:JSON.stringify(updatedMovie),
headers:{'Content-type':'application/json'}})
.then(()=> history.push('/movies'))
    // const updatedMovie={moviename,poster,summary,rating}

    // const copyMovies=movies

    // copyMovies[movieid]=updatedMovie

    // setMovies([...copyMovies])

    // history.push('/moviesedited')
  }
  return (
    <div className="edit-movie">
      <TextField
        id="filled-basic"
        value={moviename}
        variant="filled"
        onChange={(e) => setMoviename(e.target.value)}
      />
      <TextField
        id="filled-basic"
        value={poster}
        variant="filled"
        onChange={(e) => setPoster(e.target.value)}
      />
      <TextField
        id="filled-basic"
        value={summary}
        variant="filled"
        onChange={(e) => setSummary(e.target.value)}
      />
      <TextField
        id="filled-basic"
        value={rating}
        variant="filled"
        onChange={(e) => setRating(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={editMovie}>
        Confirm Changes{' '}
      </Button>
    </div>
  )
  }}