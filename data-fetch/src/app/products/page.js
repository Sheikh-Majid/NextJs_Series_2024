"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [product, setProduct] = useState([]);
  const DataFetch = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProduct(data.products);
  
      } catch (error) {
          console.log(error.message);
    }
    };
    
    useEffect(() => {
        DataFetch()
    },[])
  return (
    <div className=" bg-red-600">
      <h1 className="flex justify-center text-3xl mt-5 bg-slate-600 text-white p-4">
        All Details About Products
      </h1>
      <ul className=" ml-5 text-white">
        {product.map((value, index) => (
          <>
            <li key={index.id}> Name : {value.title}</li>
            <li> Price : {value.price}</li>
            <li>Description : {value.description}</li>
            <li> Thumbnail : {value.thumbnail}</li>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default page;
