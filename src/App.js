
import { MovieList } from './Components/movie-list/movie-list'
import { AddColor } from './Components/add-color/add-color'
import './App.css'

import {  useState } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import { RouterLinks } from './Components/router-links/router-links'
import { MovieInfo } from './Components/movie-info/movie-info'
import { AddMovie } from './Components/add-movie/add-movie'
import { EditMovie } from './Components/edit-movie/edit-movie'

import { ThemeProvider,  createTheme } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import { BasicForm } from './BasicForm'

function App() {

 
  const [mode,setMode]=useState('dark')
  const theme = createTheme({
    palette: {
      mode: mode==='dark' ? 'light' : 'dark',
    },
  });

  

const paperStyles={borderRadius:0,minHeight:'100vh'}
  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={4} style={paperStyles}> 
    <div className="app">
      <RouterLinks theme={mode} setTheme={setMode}/>

      <Switch>
        <Route exact path="/">
          <h1>Welcome to the App!!!!!!!!!!</h1>
        </Route>

        <Route path="/home">
          <AddMovie  />
          <MovieList  />
        </Route>

        <Route path="/colors">
          <AddColor />
        </Route>

        <Route path="/basic-form">
          <BasicForm />
        </Route>

        <Route path="/movie-add">
          <AddMovie  />
        </Route>

        <Route path="/movie-edit/:id">
          <EditMovie />
        </Route>

        <Route path="/moviesedited">
          <Redirect to="/home" />
        </Route>

        <Route path="/movies">
        
          <MovieList  />
        </Route>

        <Route path="/movie-info/:id">
          <MovieInfo />
        </Route>

        <Route path="**">
          <h1>Page Not found </h1>
        </Route>
      </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  )
}

export default App

