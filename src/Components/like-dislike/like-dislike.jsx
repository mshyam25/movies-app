import React,{useState,useEffect} from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Badge from '@mui/material/Badge';

import './like-dislike.css'

export const LikeDislike=()=>
{

    const [like,setLike]=useState(0)

    const [dislike,setDislike]=useState(0)

    const liked=()=>
    {
setLike(like+1)
    }

    const disliked=()=>
    {
        setDislike(dislike+1)
    }

    useEffect(()=>{

        console.log('Update',like)
    },[like])


    return(

        <div className='like-dislike'>

        <Badge badgeContent={like} color="success">
      <ThumbUpIcon color="success" onClick={liked} />
    </Badge>

    <Badge badgeContent={dislike} color="error">
      <ThumbDownAltIcon color="error" onClick={disliked} />
    </Badge>

        
        </div>
    )


}