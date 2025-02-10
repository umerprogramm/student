import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Detail() {
    const { title } = useParams()
    useEffect(()=>{
      async function getdata(){
        let res = await fetch('http://localhost:3000/detail' ,{
            method : 'post',
            headers : {
                "content-type" : "application/json" 
              },
              body :  JSON.stringify( {
                 query : title
              })
        })
        let resjson = await res.json()
        console.log(resjson);
        console.log('runing...');
        
        
      }
      getdata()
    },[])
    
  return (
    <div>
      <h1>hello {title}</h1>
    </div>
  )
}
