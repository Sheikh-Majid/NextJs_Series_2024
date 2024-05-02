import React from "react";

async function datafetch() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
}
const page = async () => {
  const response = await datafetch();
  //console.log(response);
  return (
    <div>
          <h1>Data Fetch by External resource</h1>
          <div >
              {response.map((user) => {
                return (
                  <div key={user.id}>
                    <h1> Name: {user.firstName}</h1>
                    <p>Email : {user.email}</p>
                    <p>age: {user.age}</p>
                  </div>
                );
              })}
          </div>
    </div>
  );
};

export default page;
