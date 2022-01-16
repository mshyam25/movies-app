import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './edit-movie.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

export const EditMovie = () => {
  const { id } = useParams()

  
  const [movie, setMovie] = useState(null)
  

  useEffect(()=>{

    fetch(`https://61a8d5f233e9df0017ea3b8e.mockapi.io/movies/${id}`,{method:'Get'})
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
  const history=useHistory()
  const validate=yup.object({

    moviename: yup.string().required('cannot be empty')
    .min(4)
    .max(10),
    poster:yup.string().required().min(4),
    summary:yup.string().required().min(5),
    trailer:yup.string().required().min(3),
    rating:yup.number().min(1).max(10).required()
    
    })


  const editMovie = () => {

    fetch(`https://61a8d5f233e9df0017ea3b8e.mockapi.io/movies/${id}`,
    {method:'PUT',
body:JSON.stringify(values),
headers:{'Content-type':'application/json'}})
.then(()=> history.push('/movies'))
    
  }

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        moviename: movie.moviename,
        poster: movie.poster,
        summary: movie.summary,
        rating: movie.rating,
        trailer: movie.trailer,
      },
      validationSchema: validate,
      onSubmit: editMovie,
    });

  return (
    <form onSubmit={handleSubmit}>
    <div className="edit-movie">
      <TextField
        id="filled-basic"
        name="moviename"
        label="Movie Name"  
        onBlur={handleBlur}
        value={values.moviename}
        variant="filled"
        onChange={handleChange}
        error={errors.moviename && touched.moviename}
            helperText={errors.moviename && touched.moviename ? errors.moviename : ''}
      />
      <TextField
        id="filled-basic"
        name="poster"
        onBlur={handleBlur}
        value={values.poster}
        variant="filled"
        onChange={handleChange}
        error={errors.poster && touched.poster}
            helperText={errors.poster && touched.poster ? errors.poster : ''}
      />
      <TextField
        id="filled-basic"
        name="summary"
        onBlur={handleBlur}
        value={values.summary}
        variant="filled"
        onChange={handleChange}
        error={errors.summary && touched.summary}
            helperText={errors.summary && touched.summary ? errors.summary : ''}
      />
      <TextField
      name="rating"
        id="filled-basic"
        onBlur={handleBlur}
        value={values.rating}
        variant="filled"
        onChange={handleChange}
        error={errors.rating && touched.rating}
            helperText={errors.rating && touched.rating ? errors.rating : ''}
      />

      <TextField
      name="trailer"
      id="filled-basic"
      onBlur={handleBlur}
      value={values.trailer}
      variant="filled"
      onChange={handleChange}
      error={errors.trailer && touched.trailer}
            helperText={errors.trailer && touched.trailer ? errors.trailer : ''}
    />
      <Button variant="contained" color="secondary" type='submit'>
        Confirm Changes
      </Button>
    </div>
    </form>
  )
  }}