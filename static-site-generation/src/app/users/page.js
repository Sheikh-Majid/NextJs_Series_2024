import React from "react";
import getData from "../../../service/getdata";
import Link from "next/link";

const page = async () => {
  const response = await getData();
  //console.log(response);
  return (
    <div>
      <h1>User Page </h1>
      <div>
        {response.map((user) => (
          <h1 key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default page;
