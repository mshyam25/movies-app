import React from 'react'
import {Link} from 'react-router-dom'

export const RouterLinks=()=>
{

    return(

        <div>
        <Link to='/home'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/Colors'>Colors</Link>
        </div>
    )
}