import React, { useEffect, useState } from 'react'
import './chat.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export default function Chat() {
  const [data , setdata]  = useState([])
  useEffect(()=>{
    async function getchat(){
      let res = await fetch('http://localhost:3000/getchat' , {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
       },
       body : JSON.stringify({
        email : localStorage.getItem("email")
       })
      })
      let data = await res.json()
      setdata(data);
      
    }
    getchat()
  },[])
  return (
    <div>
        <Link className="link" to="/prompt">

             <div className='parent'>
        <div className="add">
            <p>+</p>
             </div>
              {
                data.map(item=>{
                  return(
                  <div className='box'>
                    <h3>{item.chat}</h3>
                  </div>

                  )


                })

              }
             </div>
        
        </Link>
    </div>
  )
}
