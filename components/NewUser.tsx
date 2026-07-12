"use client";
import React, { useState } from 'react'

const NewUser = () => {

    const [userName, setUserName] = useState("");
    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setUserName(event.target.value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(userName)
    }
  return (
    <div>
        <h1>Create New User</h1>
        <input type='text' placeholder='Enter your name' value={userName} onChange={handleUserNameChange}/>
    <button onClick={handleClick}>Show Name</button>
    
    </div>
    
  )
}

export default NewUser