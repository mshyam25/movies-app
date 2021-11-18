import React from 'react'
import './color-box.css'
export const ColorBox=({color})=>{
const styles={backgroundColor:color}
    return(
<div style={styles} className='color-box'></div>
        
    )
}