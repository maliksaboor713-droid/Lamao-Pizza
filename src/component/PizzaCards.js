'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PizzaCard() {
  return (
    <>
    <div className="bg-orange-700 flex flex-col justify-center items-center p-2 rounded-[20px] outline-10 outline-offset-1 outline-orange-800 shadow-lg shadow-blue-900/50 ">
      <Image className="  p-4 h-50 w-50 border-b border-b-black contrast-150 " src="/img/pizza.png" height={200} width={200} alt="slider(img)" />

      <div className=" bg-orange-900/30 text-center items-center m-4 border border-t-blue rounded-[4px]">
        <h1 className="text-gray-200 text-[1.5rem] text-[800] ">Title : Pizza</h1>
        <h1 className="text-gray-900 text-[1.2rem] mb-2 ">$ 99</h1>
        <p className="text-white p-4 pt-0 ">Description : Founded with a passion for authentic flavors, our master bakers use traditional techniques combined with bold local favorites.</p>
      </div>
    </div>
    </>
  )
}



