import { InitialMovieList } from './Components/Initial-data/initial-data';
import { MovieList } from './Components/movie-list/movie-list';
import { AddColor } from './Components/add-color/add-color';
import './App.css';

import {useState} from 'react'

import {Switch,Route} from 'react-router-dom'
import { RouterLinks } from './Components/router-links/router-links';
import { MovieInfo } from './Components/movie-info/movie-info';


function App() {

  const [movies,setMovies]=useState(InitialMovieList)

  return (
    <div>
   
<Switch>


<Route path='/home'>
<h1>Welcome to the App!!!!!!!!!!</h1>
</Route>

<Route path='/colors'>
<AddColor/>
</Route>



<Route path='/movies'>
<MovieList moviesList={movies} setMoviesList={setMovies}/>
</Route>

<Route path='/movie-info/:movieid'>
<MovieInfo moviesList={movies} />
</Route>



<Route path='/'>
<RouterLinks/>

<MovieList moviesList={movies}/>
</Route>

</Switch>



  

     
    </div>
  );
}

export default App;
