import React from 'react'


import { useState, useEffect } from 'react'
const StateMgm = () => {

    const [city, setCity]=useState("Hyderabad")

    useEffect(()=>{


      if(city==="Hyderabad"){
        setCity("Bangalore")
       }else{  
        setCity("Delhi")
       }

    },[])

    
  return (
    <div>
      <h1>I live in {city}</h1>
    </div>
  )
}

export default StateMgm