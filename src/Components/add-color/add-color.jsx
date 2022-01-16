import React, { useState } from 'react'
import { ColorBox } from '../color-box/color-box'
import { ColorsList } from '../Initial-data/initial-data'
import { useReducer } from "react";

const initialState={color:'pink'}

const reducer=(state,action)=>{

    switch(action.type)
    {
        case 'changeColor':

        return {color:action.payload}

        default: return state
    }
}

export const AddColor=()=>{

    const [state,dispatch]=useReducer(reducer,initialState)

    const [colors,setColors]=useState(ColorsList)
   


    const styles={backgroundColor:state.color,padding:'10px'}



const add=()=>
{
setColors([...colors,state.color])
}

    return( 

        <div className='color-component'>
        <input type='text' placeholder='Enter a Color' style={styles} onChange={(e)=>dispatch({type:'changeColor',payload:e.target.value})}/>
        <button onClick={add} >Add Color</button>
        <div className='colors-container'>
       {colors.map((color,index)=> <ColorBox key={index} color={color}/>)}
       
        </div>
        </div>
    )
}