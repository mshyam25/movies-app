import React, { useState } from "react";
import './add-movie.css'
import { useHistory } from "react-router";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const AddMovie=({movies,setMovies})=>{

    const [moviename,setMoviename]=useState('')
    const [poster,setPoster]=useState('')
    const [summary,setSummary]=useState('')
    const [rating,setRating]=useState('')
    const newMovie={moviename:moviename,poster:poster,summary:summary,rating:rating}

    const history=useHistory()

const addMovie=()=>{

    setMovies([...movies,newMovie])

history.push('/')
    
}

    return(

        <div className='add-movie'>
        <TextField id="outlined-basic" label="Movie Name" variant="outlined" onChange={(e)=>setMoviename(e.target.value)}/>
        <TextField id="outlined-basic" label="Poster Url" variant="outlined" onChange={(e)=>setPoster(e.target.value)}/>
        <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(e)=>setSummary(e.target.value)}/>
        <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(e)=>setRating(e.target.value)}/>
<Button variant="contained" color="success" onClick={addMovie}>Add Movie</Button>


        
        </div>
    )
}