import React from 'react'
import { useSelector } from "react-redux";

export default function Avatar() {
  const items = useSelector((state) => state.photo);
  let avatar =''
  if (items.length>0){
    avatar = items [items.length-1]
  }


  return (
    <div className='MainAvatar'>
           <img className='avatar' src={avatar} alt="Avatar" />
    </div>
  )
}
