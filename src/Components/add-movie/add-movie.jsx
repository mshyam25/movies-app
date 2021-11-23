import React from 'react'
import './add-movie.css'
import { useHistory } from 'react-router'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useFormik } from 'formik'
import * as yup from 'yup'

export const AddMovie = () => {
  //    const [moviename,setMoviename]=useState('')
  //     const [poster,setPoster]=useState('')
  //     const [summary,setSummary]=useState('')
  //     const [rating,setRating]=useState('')
  // const [newMovie,setNewMovie]=useState({})

  const history = useHistory()
  // const [movies, setMovies] = useState([])
  // setMovies([...movies,newMovie])

  // useEffect(()=>{
  //   fetch('https://61988da3164fa60017c230e3.mockapi.io/movies',{method:'GET'})
  //   .then(response=>response.json())
  //   .then(data=>setMovies(data))
  //     },[])

  //     const addMovie=()=>{

  //         // console.log(newMovie)

  // //     fetch('https://61988da3164fa60017c230e3.mockapi.io/movies',
  // //     {method:'POST',
  // //     body:JSON.stringify(newMovie),
  // //    headers:{'Content-type':'application/json'}})
  // //   .then(()=> history.push('/movies'))

  //       }

  const formValidate = yup.object({
    moviename: yup
      .string()
      .min(2, 'Minimum 2 characters')
      .max(14)
      .required('Required'),

    poster: yup.string().required('Required'),

    summary: yup.string().required('Required'),

    rating: yup.number().required(),
  })

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: { moviename: '', poster: '', summary: '', rating: '' },
      validationSchema: formValidate,
      onSubmit: () => {
        fetch('https://61988da3164fa60017c230e3.mockapi.io/movies', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: { 'Content-type': 'application/json' },
        }).then(() => history.push('/movies'))
      },
    })

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-movie">
        {/*  <TextField id="outlined-basic" label="Movie Name" variant="outlined" onChange={(e)=>setMoviename(e.target.value)}/>
        <TextField id="outlined-basic" label="Poster Url" variant="outlined" onChange={(e)=>setPoster(e.target.value)}/>
        <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(e)=>setSummary(e.target.value)}/>
        <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(e)=>setRating(e.target.value)}/>
    <Button variant="contained" color="success" onClick={addMovie}>Add Movie</Button> */}

        {errors.moviename && touched.moviename ? (
          <TextField
            error
            id="outlined-error-helper"
            label="Movie Name"
           
            helperText={errors.moviename}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <TextField
            name="moviename"
            value={values.moviename}
            id="outlined-basic"
            label="Movie"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}

        {errors.poster && touched.poster ? (
          <TextField
            error
            id="outlined-error-helper"
            label="Poster URL"
            helperText={errors.poster}
          />
        ) : (
          <TextField
            name="poster"
            value={values.poster}
            id="outlined-basic"
            label="Poster"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}

        {errors.summary && touched.summary ? (
          <TextField
            error
            id="outlined-error-helper"
            label="Summary"
            helperText={errors.summary}
          />
        ) : (
          <TextField
            name="summary"
            value={values.summary}
            id="outlined-basic"
            label="Summary"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}

        {errors.rating && touched.rating ? (
          <TextField
            error
            id="outlined-error-helper"
            label="Rating"
            helperText={errors.rating}
          />
        ) : (
          <TextField
            name="rating"
            value={values.rating}
            id="outlined-basic"
            label="Rating"
            variant="outlined"
            color={errors.rating && touched.rating ? 'error' : 'success'}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}

        <Button variant="contained" color="success" type="submit">
          Add Movie
        </Button>
      </div>
    </form>
  )
}
