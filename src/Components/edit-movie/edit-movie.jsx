import React,{useState} from 'react'
import { useParams,useHistory } from 'react-router'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './edit-movie.css'

export const EditMovie=({movies,setMovies})=>{

    const {movieid}=useParams()
const movie=movies[movieid]
const history=useHistory()
    const [moviename,setMoviename]=useState(movie.moviename)
    const [poster,setPoster]=useState(movie.poster)
    const [summary,setSummary]=useState(movie.summary)
    const [rating,setRating]=useState(movie.rating)


    const editMovie=()=>{

        const updatedMovie={moviename,poster,summary,rating}

        const copyMovies=movies

        copyMovies[movieid]=updatedMovie

        setMovies([...copyMovies])

        history.push('/moviesedited')
    }


    return (

        <div className='edit-movie'>
        <TextField id="filled-basic" value={moviename} variant="filled"  onChange={(e)=>setMoviename(e.target.value)}/>
        <TextField id="filled-basic" value={poster} variant="filled" onChange={(e)=>setPoster(e.target.value)}/>
        <TextField id="filled-basic" value={summary} variant="filled" onChange={(e)=>setSummary(e.target.value)}/>
        <TextField id="filled-basic" value={rating} variant="filled" onChange={(e)=>setRating(e.target.value)}/>
        <Button variant="contained" color="secondary" onClick={editMovie}>Confirm Changes </Button>
        
        </div>
    )
}