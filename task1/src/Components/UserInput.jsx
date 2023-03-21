import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../slices/counter";

export default function UserInput() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    e.preventDefault();
    
    dispatch(increment(e.target.value))
  }


  return (
    <div>
      <input onInput={handleChange} type='number' min='0' max='5'/>
    </div>
  )
}
