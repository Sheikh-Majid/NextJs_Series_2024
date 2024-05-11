import React from 'react'
async function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Excute in 3 second..");
    }, 3000);
  });
}
const page = async() => {
    await delay();
  return (
    <div>
      <h1>user profile</h1>
    </div>
  )
}

export default page
