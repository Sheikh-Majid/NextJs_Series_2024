import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <h1>Header</h1>
      <main>{children}</main>
      <h2>Footer</h2>
    </div>
  );
}

export default layout
