'use client'
import React, { useState } from 'react'


const page = () => {

    const[color , setColor] = useState({backgroundColor : "yellow"})
  return (
    <div>
          <h1 style={{ backgroundColor: "blue" }}>Second Page in Next Js</h1>
          <h2>Second Page in Next Js</h2>
          <h3 style={ color}> chnage color</h3>
          <button onClick={()=> setColor({backgroundColor:"green" , color :"red" , padding : "10px"})}>click me</button>
    </div>
  );
}

export default page
