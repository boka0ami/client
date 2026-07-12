"use client";
import React, { ChangeEvent, SubmitEvent, useState } from 'react'

const UserNew = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value);
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value);
  }

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) =>{
    event.preventDefault(); // Prevents page reload
     // Access the form element
    //const form = event.currentTarget;        
    // Process form data with FormData
    //const formData = new FormData(form);
    //const data = Object.fromEntries(formData.entries());    
    //console.log(data);
    const newUser = {name, email };
    console.log(newUser);
  }
  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>
              Name
              <input type='text' id='name' value={name} required onChange={handleNameChange}/>
            </label>
        </div>
        <div>
            <label htmlFor='email'>
              Email
              <input type='text' id='email' value={email} required onChange={handleEmailChange}/>
            </label>
        </div>
        <button type='submit'>Create User</button>
      </form>
    </div>
  )
}

export default UserNew