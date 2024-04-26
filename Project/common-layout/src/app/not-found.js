import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>404 Not found This Page is not available</h1>
      <br />
      <div>
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound
