'use client'
import React, { useState } from 'react'
import colors from "./condtional.module.css"

const page = () => {
    const [color, setColor] = useState("green");
    const {orange , blue , yellow} = colors
  return (
    <div>
      <h1 className={colors.red}>Conditional Css PArt 1</h1>
      <h2 className={color == "red" ? colors.red : colors.green}>
        Conditional Css PArt 1{" "}
      </h2>
      <button onClick={() => setColor("red")}>click me</button>

      <h4 id={colors.orange}>heading</h4>
      <h4 id={yellow}>heading</h4>
      <h4 id={blue}>heading</h4>
      <h4 id={orange}>heading</h4>
    </div>
  );
}

export default page
