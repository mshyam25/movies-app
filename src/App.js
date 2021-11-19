import { InitialMovieList } from './Components/Initial-data/initial-data';
import { MovieList } from './Components/movie-list/movie-list';
import { AddColor } from './Components/add-color/add-color';
import './App.css';

import {useState} from 'react'

import {Switch,Route,Redirect,useHistory} from 'react-router-dom'
import { RouterLinks } from './Components/router-links/router-links';
import { MovieInfo } from './Components/movie-info/movie-info';
import { AddMovie } from './Components/add-movie/add-movie';
import { EditMovie } from './Components/edit-movie/edit-movie';


function App() {

  const [movies,setMovies]=useState(InitialMovieList)
  const history=useHistory()

  return (
    <div className='app'>
    
    <RouterLinks/>
    <Switch>


<Route path='/home'>
<h1>Welcome to the App!!!!!!!!!!</h1>
<AddMovie movies={movies} setMovies={setMovies}/>
<MovieList movies={movies} setMovies={setMovies}/>
</Route>

<Route path='/colors'>
<AddColor/>

</Route>

<Route path='/movie-add'>
<AddMovie movies={movies} setMovies={setMovies}/>
<MovieList movies={movies} setMovies={setMovies}/>
</Route>

<Route path='/movie-edit/:movieid'>
<EditMovie movies={movies} setMovies={setMovies}/>
</Route>

<Route path='/moviesedited'>
<Redirect to='/'/>
</Route>

<Route path='/movies'>
<button onClick={history.push('/movie-add')}>Add New Movie</button>
<MovieList movies={movies} setMovies={setMovies}/>
</Route>

<Route path='/movie-info/:movieid'>
<MovieInfo movies={movies} />
</Route>



<Route path='/'>
<AddMovie movies={movies} setMovies={setMovies}/>
<MovieList movies={movies} setMovies={setMovies}/>
</Route>

</Switch>

    </div>
  );
}

export default App;
