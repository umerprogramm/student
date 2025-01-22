import React, { useState } from 'react'

export default function Login() {
  const [user , setuser ] = useState({
    email : '',
    pass :  ''
  })
 async function logininfo(){
    let res = await fetch('http://localhost:3000/login' , {
      method : 'POST',
      headers : {
        "content-type" : "application/json" 
      },
      body : JSON.stringify(user)
    })
    let data   = await res.json()
    console.log(data);
    
    
  }
  function onchangehandle(e){
    let { name , value}  = e.target
    setuser(
     { ...user,
      [name] : value}
    )
  }
  return (
    <div>
      <input onChange={onchangehandle} name='email' type="text" placeholder='enter your username' />
      <input onChange={onchangehandle}  name="pass" type="text" placeholder='enter your password' />
      <button onClick={logininfo}>login</button>
    </div>
  )
}
