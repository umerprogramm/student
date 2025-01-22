import React from 'react'
import { useState } from "react"
import './prompt.css'


export default function Prompt() {
     const [content , setcontent ] = useState('')
     const [input , setinput ] = useState('')
    
     async function getdata() {
      const response = await fetch('https://api-inference.huggingface.co/models/Qwen/QwQ-32B-Preview/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "Qwen/QwQ-32B-Preview",
          messages: [
            {
              role: "user",
              content: input
            }
          ],
          max_tokens: 500,
          stream: false
        })
      });
      const data = await response.json();
      setcontent(data.choices[0].message.content);
      let res = fetch("http://localhost:3000/chats",{
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
       },
       body : JSON.stringify({
        email : localStorage.getItem('email'),
        chat : input,
        content : data.choices[0].message.content
       })
      })
    }
    
  return (
    <>
    <p>{content}</p>
     <div className="btn_prompt">
     <input className="prompt" type="text" placeholder="enter content here" onChange={(e)=>setinput(e.target.value) }/>
    <button className="btn" onClick={getdata}>send now</button>
     </div>
    </>
  )
}
