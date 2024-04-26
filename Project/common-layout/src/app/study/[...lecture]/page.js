'use client'
import React from 'react'
// optional catch segments
const page = ({ params }) => {
    console.log(params)
  return (
    <div>
      <h1>Lecture 1 for student</h1>
      <h2> day  : {params.lecture[0]}</h2>
      <h2> lecture  : {params.lecture[1]}</h2>
      <h2> description : {params.lecture[2]}</h2>
    </div>
  );
}

export default page
