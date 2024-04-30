'use client'
import Script from 'next/script'
import React from 'react'

const page = () => {
  return (
    <div>
          <h1>current location of user:</h1>
          <Script src='./locat.js'
          onLoad={()=> console.log("file loaded")}></Script>
    </div>
  )
}

export default page
