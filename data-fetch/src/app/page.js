import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-500 text-5xl text-red-700">
      <h1>Data Fetch From External resource</h1>
      <h2>
        <Link href="/products">Go To Products Page</Link>
      </h2>
      <Link href="/comment">Go to Comment Page</Link>
    </main>
  );
}
