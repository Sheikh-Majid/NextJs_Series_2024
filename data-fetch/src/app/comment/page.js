import React from 'react'
import {post} from "./post"


 async function datafetch() {
    const res = await fetch("https://dummyjson.com/comments");
    const data = await res.json();
    return data.comments;
}

const page = async() => {

    const response = await datafetch();
   // console.log(response)
  return (
    <div className="flex justify-center mt-5 bg-cyan-500 text-white text-3xl flex-col mb-5">
      <h1 className="mb-5">user Comment fetch data from backend </h1>
      <div>
        {response.map((item, index) => (
          <>
            <li>Name : {item.user.username}</li>
            <li> PostId: {item.postId} </li>
            <li key={index.id}>Body : {item.body}</li>
            {/* <button className='rounded-full'>To Konw Price</button> */}

            <li>
                    <post paise={item.postId} />
                    
              <h3>Hello jee</h3>
            </li>

            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default page
