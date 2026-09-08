'use client';
import Image from "next/image";

export default function Pizzacard() {
  return (
    <>
    <div className=" bg-orange-800 text-white flex justify-around items-center border border-black rounded-[20px] overflow-hidden shadow-xl/20 fill-white drop-shadow-xl/50 ">
      <Image className="contrast-120 h-40 p-5 w-40 bg-orange-700 border-r border-r-black " src="/img/pizza.png" height={500} width={500} alt="pizzacard" />
      
      <div className="bg-orange-700 p-2 flex flex-col justify-around items-center gap-1 text-center items-center">
      <h1 className="text-[1.5rem]">Title : Pizza</h1>
      <h1 className="text-[1.2rem] text-shadow-lg text-blue-400 text-[300]">$99</h1>
      <p className="text-balance">Slice into Happiness: Hot, Fresh, and Made with Love!</p>
      
      </div>
    </div>
    </>
  )
}
