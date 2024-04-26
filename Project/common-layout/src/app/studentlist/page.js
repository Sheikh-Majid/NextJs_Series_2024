"use client";
import Link from "next/link";

export default function page() {
       const students = [
         { name: "Shaikh", slug: "shaikh" },
         { name: "Majid", slug: "majid" },
         { name: "Tarique", slug: "tarique" },
         { name: "Bisham", slug: "bisham" },
       ];
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h1>studnt List</h1>
      {/* <ul>
        <li>
          <Link href="/studentlist/Shaikh">Shaikh</Link>
        </li>
        <li>
          <Link href="/studentlist/Majid">Majid</Link>
        </li>
        <li>
          <Link href="/studentlist/Tarique">Tarique</Link>
        </li>
        <li>
          <Link href="/studentlist/Bisham">Bisham</Link>
        </li>
      </ul> */}

      {students.map((value, index) => (
        <li key={index}>
          <Link href={`/studentlist/${value.slug}`}>{value.name}</Link>
        </li>
      ))}
    </div>
  );
}
