import React from 'react'
import custom from "../user/stylee.module.css"
import alpha from "@/style/outside.module.css"

const page = () => {
  return (
    <div>
          <h4 className={custom.main}> heading one for Style</h4>
          <h4 className={alpha.main}> heading two</h4>
    </div>
  )
}

export default page
