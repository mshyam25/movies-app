import React from 'react'
import {Link} from 'react-router-dom'
import './router-links.css'

import HomeIcon from '@mui/icons-material/Home';

import MovieIcon from '@mui/icons-material/Movie';

import AddIcon from '@mui/icons-material/Add';

import PaletteIcon from '@mui/icons-material/Palette';

import IconButton from '@mui/material/IconButton';



import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

import Brightness5Icon from '@mui/icons-material/Brightness5';

export const RouterLinks=({theme,setTheme})=>
{

    return(

        <div className='router-links'>
        <ul>
        
     <li>  <Link to='/home'><IconButton aria-label="home">
        <HomeIcon  color='primary' size='large's/>
        </IconButton>
        </Link></li> 
        
        <li>  <Link to='/movies'><IconButton aria-label="home">
        <MovieIcon  color='primary' size='large's/>
        </IconButton></Link></li> 

        <li>  <Link to='/movie-add'><IconButton aria-label="home">
        <AddIcon  color='primary' size='large's/>
        </IconButton></Link></li> 

        <li>   <Link to='/Colors'><IconButton aria-label="home">
        <PaletteIcon  color='primary' size='large's/>
        </IconButton></Link></li> 

        <li> 
        <IconButton aria-label="Theme" onClick={()=>setTheme(theme==='dark' ? 'light' : 'dark')} style={{marginLeft:'auto'}}>
        
         {theme==='dark' ? <Brightness5Icon color='primary'/> : <BrightnessHighIcon/>}
        </IconButton>
        </li>
    <Link to='/basic-form'>Basic Form</Link>
        </ul>
        
        </div>
    )
}