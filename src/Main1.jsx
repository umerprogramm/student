import React, { useEffect, useState } from 'react'

export default function Main1() {
  const [ product , setproduct ] = useState([])
  useEffect(()=>{
    async function fetchdata(){
      let res = await fetch('http://localhost:3000/allproducts')
      let resdata = await res.json()
      setproduct(resdata)
      
    }
    fetchdata()
  },[])
  return (
    <div>
      <h1>Featured product</h1>
      {
        product.map(item =>{
          return(
            <>
            <img src={item.image} alt="" />
            <a href={`/${item.title}`}>
            <h3>{item.title}</h3>
            
            </a>
            <h3>{item.price}</h3>
            
            </>
          )
  
        })
      }
    </div>
  )
}
