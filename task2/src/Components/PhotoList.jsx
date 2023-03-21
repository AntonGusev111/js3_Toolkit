import React from 'react'
import { useSelector } from "react-redux";

export default function PhotoList() {
  const items = useSelector((state) => state.photo);
  let result=[];

  for (let i=0; i<items.length-1; i++){
    result.push(items[i])
  }


  return (
    <div className='PhotoList'>
      {result.map((element)=>{
        return(
          <img className='element' src={element} alt="Avatar" />
        )
      })}
    </div>
  )
}
