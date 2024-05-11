import Link from 'next/link';
import React from 'react'

const Notfound = () => {
  return (
    <div>
          <h1>Page Not Found 404</h1>
          <p>The Page You Are Taring Access That is Not available</p>
          <Link href='/about' type='button'>Back To About</Link>
    </div>
  )
}

export default Notfound;
