import React from 'react'
import './add-movie.css'
import { useHistory } from 'react-router'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useFormik } from 'formik'
import * as yup from 'yup'
import {API} from '../../global.js'
export const AddMovie = () => {
 

  const history = useHistory()


  const formValidate = yup.object({
    moviename: yup
      .string()
      .min(4, 'Minimum 4 characters')
      .max(14)
      .required('Required'),

    poster: yup.string().required('Required'),

    summary: yup.string().required('Required'),

    rating: yup.number().required(),
    trailer:yup.string().required()
  })

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: { moviename: '', poster: '', summary: '', rating: '',trailer:'' },
      validationSchema: formValidate,
      onSubmit: () => {
        fetch(`${API}`, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: { 'Content-type': 'application/json' },
        }).then(() => history.push('/movies'))
      },
    })

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-movie">
    
          <TextField
            name="moviename"
            value={values.moviename}
            id="moviename"
            label="Movie Name"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.moviename && touched.moviename}
            helperText={errors.moviename && touched.moviename ? errors.moviename : ''}
          />
      
          <TextField
            name="poster"
            value={values.poster}
            id="outlined-basic"
            label="Poster"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.poster && touched.poster}
            helperText={errors.poster && touched.poster ? errors.poster : ''}
          />
          
          <TextField
            name="summary"
            value={values.summary}
            id="outlined-basic"
            label="Summary"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.summary && touched.summary}
            helperText={errors.summary && touched.summary ? errors.summary : ''}
          />
  

          <TextField
            name="rating"
            value={values.rating}
            id="outlined-basic"
            label="Rating"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.rating && touched.rating}
            helperText={errors.rating && touched.rating ? errors.rating : ''}
          />

          <TextField
          name="trailer"
          value={values.trailer}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.trailer && touched.trailer}
            helperText={errors.trailer && touched.trailer ? errors.trailer : ''}
        />


      

        <Button variant="contained" color="success" type="submit">
          Add Movie
        </Button>
      </div>
    </form>
  )
}
