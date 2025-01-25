import React, { useState } from 'react'

export default function Forget() {
    const [email , setemail] = useState('')
    async function forgetpass(){
        let res = fetch('http://localhost:3000/forget' , {
            method : 'POST',
            headers : {
              "content-type" : "application/json" 
            },
            body : JSON.stringify({email :email})
        })
    }
  return (
    <div>
        <h3>we'll send your ottp code on your email</h3>
      <input onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder='enter your gmail'/>
      <button onClick={forgetpass}>send gmail</button>
    </div>
  )
}
