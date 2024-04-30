import React from 'react'
import { Roboto, Inter, Roboto_Mono } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
const page = () => {


  return (
    <div>
      <h1>Font nextjs</h1>
      <h1 className={roboto.className}>
        font with nextjs optimizing and no new network call:
      </h1>
      <h2 className={inter.className}>
        
        mutiple font together part1
      </h2>
      <h2> mutiple font together part2 </h2>
    </div>
  );
}

export default page
