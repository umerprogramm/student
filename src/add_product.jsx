import React, { useState } from 'react'

export default function Add_product() {
  const [product  , setproduct] = useState({
    title : '',
    price : '',
    description : '',
    image : '',
    // seller : localStorage.getItem("email")
  })
  function onChangehandle(e){
    const {name , value} = e.target
    setproduct({
      ...product ,
      [name] : value
    })
  }


  async function senddata(){
    let res = await fetch('http://localhost:3000/addproduct' , {
      method : 'post',
        headers : {
          "content-type" : "application/json" 
        },
        body : JSON.stringify(product)
      
    })
    let resdata = await res.json()
    alert(resdata.message);
    
    
  }
  return (
    <div>
      <input onChange={onChangehandle} name='title' type="text" placeholder='enter your title'/>
      <input onChange={onChangehandle} name='price' type="text" placeholder='enter your price'/>
      <input onChange={onChangehandle} name='description' type="text" placeholder='enter your description'/>
      <input onChange={onChangehandle} name='image' type="text" placeholder='enter your product image url'/>
      <button onClick={senddata}>add product</button>
      
    </div>
  )
}
