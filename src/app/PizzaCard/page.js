'use client';
// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PizzaCard({ pizza }) {
  return (
    <>
    <Link href={`/PizzaCard/${pizza.id}`} className="bg-orange-700 flex flex-col justify-center items-center p-2 rounded-[10px] outline-5 outline-offset-5 outline-orange-800 shadow-lg shadow-blue-900/50 ">
      <Image className=" py-5 m-3 h-50 w-50 border-b border-b-black contrast-150 " src={pizza.image} height={200} width={200} alt="slider(img)" />

      <div className=" bg-orange-900/30 text-center items-center m-4 border border-t-blue rounded-[4px]">
        <h1 className="text-gray-200 text-[1.5rem] text-[800] ">{pizza.name}</h1>
        <h1 className="text-gray-900 text-[1.2rem] mb-2 ">$ {pizza.price[1]}</h1>
        <p className="text-white p-4 pt-0 ">{pizza.desc}</p>
      </div>
    </Link>
    </>
  )
}