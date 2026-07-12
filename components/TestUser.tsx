"use client";
import React, { useState } from 'react'

type User = {
    id:number,
    name:string
}

const TestUser = () => {
    //const [user, setUser] = useState<null | User>(null);
    const [user, setUser] = useState<User>({} as User);

    const handleAddUser = () =>{
        setUser({
            id:1,
            name:"Mojidul"
        });
    }

  return (
    <div>
        <button onClick={handleAddUser} style={{backgroundColor:'pink'}}>
                Add User
        </button>
        <p>
            {user?.name}
        </p>
    </div>
  )
}

export default TestUser