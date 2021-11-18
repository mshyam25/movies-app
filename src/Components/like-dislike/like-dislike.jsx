import React,{useState} from 'react'

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


    return(

        <div>
        <button onClick={liked}>{like}</button>
        <button onClick={disliked}>{dislike}</button>
        </div>
    )


}