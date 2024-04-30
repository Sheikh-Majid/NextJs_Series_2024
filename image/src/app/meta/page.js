import React from 'react'


// new way to create metaData
 export const metadata ={
     
         title: "Meta Page",
         description: "This is Meta Page",
         keywords: "This is Meta Page"
     
}
const page = () => {
  return (
    <div>
      <h1>This is Meta Page </h1>
    </div>
  )
}

export default page
 
 // old wway
// export function generateMetadata() {
//   return {
//     title: "Meta Page",
//     description: "This is Meta Page",
//     keywords: "This is Meta Page",
//   };
// }