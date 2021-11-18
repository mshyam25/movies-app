import React, { useState } from 'react'
import { ColorBox } from '../color-box/color-box'
import { ColorsList } from '../Initial-data/initial-data'

export const AddColor=()=>{

    const [colors,setColors]=useState(ColorsList)
    const [newColor,setNewColor]=useState('')

    const styles={backgroundColor:newColor,padding:'10px'}
    const onChange=(e)=>{
setNewColor(e.target.value)
    }

const add=()=>
{
setColors([...colors,newColor])
}

    return( 

        <div className='color-component'>
        <input type='text' placeholder='Enter a Color' style={styles} onChange={onChange}/>
        <button onClick={add} >Add Color</button>
        <div className='colors-container'>
       {colors.map((color,index)=> <ColorBox key={index} color={color}/>)}
       
        </div>
        </div>
    )
}