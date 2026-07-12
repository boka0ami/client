import React from 'react'

// type UserProps = {
//     name:string; 
//     age:number; 
//     isRegistered:boolean;
//     lang:string[]
// }

type UserProps ={
    user: {
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
}
}

export const Test = ({user}:UserProps) => {
  return (
    <div>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        {user.isRegistered ? <p>Registerd</p> : <p>Not Registered</p>}
        <p>
            {
                user.lang.map((language, index) =>{
                    return <span key={index}>{language} </span>
                })
            }
        </p>
     </div>
  )
}
