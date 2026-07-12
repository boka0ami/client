"use client";
import React, { useReducer } from 'react'

const initialState = {
    count:0
}

const INCREMENT = "INCREMENT"
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

type IncrementActionType = {type: typeof INCREMENT}
type IncrementByAmountActionType = {type: typeof INCREMENTBYAMOUNT, payload:number}
type DecrementActionType = {type: typeof DECREMENT}
type ResttActionType = {type: typeof RESET}

type CounterActionType = IncrementActionType | IncrementByAmountActionType | DecrementActionType | ResttActionType

const reducer = (state: typeof initialState, action: CounterActionType) =>{
    switch (action.type){
        case INCREMENT:
            return {count: state.count + 1}
        case INCREMENTBYAMOUNT:
            return {count: state.count + action.payload}
        case DECREMENT:
            return {count: state.count - 1}
        case RESET:
            return {count: 0 }
        default:
            throw new Error();
    }

}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>Counter: {state.count}</h1>
        <button className='customBtnPrimary' onClick={()=>{dispatch({type: INCREMENT})}}>Increment</button>
        <button className='customBtnPrimary' onClick={()=>{dispatch({type: INCREMENTBYAMOUNT, payload:5})}}>Increment By Amount</button>
        <button className='customBtnDanger' onClick={()=>{dispatch({type: RESET})}}>Reset</button>
        <button className='customBtnPrimary' onClick={()=>{dispatch({type: DECREMENT})}}>Decrement</button>
    </div>
  )
}

export default Counter