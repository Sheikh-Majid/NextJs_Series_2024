import React from 'react'

const page = ({params}) => {
  return (
    <div>
          <h1> name : {params.student}</h1>
    </div>
  )
}

export default page
