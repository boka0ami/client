import React from 'react'

type UserDemeProps = {
    users: {
    id: number;
    name: string;
    email: string;
    age: number;
}[]
}
export const UserDemo = ({users}:UserDemeProps) => {
  return (
    <div>
        {users.map((user)=>{
            return <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.age}</p>
                </div>
        })}    
    </div>
  )
}
