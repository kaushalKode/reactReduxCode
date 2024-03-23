import React, { useState } from 'react'
import { increment, decrement, reset } from './CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const dispatch = useDispatch()
    const value = useSelector((store)=> store.counter.count)

  return (
    <div>
        <p>{value}</p>
        <div>
        
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>R</button>
        </div>
    </div>
  )
}

export default Counter