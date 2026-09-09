'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Header() {
    const { cartCount } = useCart();
  return (
<header className="h-[62px] bg-orange-800 text-white border-b-4 border-b-gray-200">
      <nav className=" flex justify-between items-center mr-10 ml-5">

        <Link href="/orders" className=" flex justify-center items-center border border-white rounded-[8px] hover:bg-blue-900/50 active:bg-blue-700 overflow-hidden ">
          <Image src='/img/telephone.png' height={50} width={50} alt='Logo' className=' bg-black hover:bg-black/70 p-[2px] '/>
            <div className=" min-sm:hidden max-sm:hidden lg:block text-center content-center text-[2rem] p-[2px] text-[900] bg-blue-900 hover:bg-blue-800 active:bg-blue-900 ">
              <h1 className=" text-[2rem] text-white text-center content-center px-2 ">Order Now !</h1>
            </div>
        </Link>

        <div className=" min-sm:text-[1rem] h-[50px]  flex justify-between items-center text-[5rem] text-white border rounded-[6px] overflow-hidden outline-2 outlineline-offset-1 outline-orange-200 ">
          <Link href='/' className=" min-sm:hidden max-sm:hidden md:block hover:bg-orange-700/50 p-7 text-[1.5rem]">Home</Link>
          <Link href='/about' className=" max-sm:hidden max-sm:hidden  hover:bg-orange-700/50 p-7 text-[1.5rem] ">About</Link>
        <Image src='/img/logo.png' height={120} width={120} alt='Logo' className=' bg-black border rounded-full border-blue-800 hover:bg-blue-900 active:bg-blue-800'></Image> 
          <Link href='/product' className=" min:sm:p-1 max-sm:p-2 max-md:p-4 hover:bg-orange-700/50 p-3 text-[1.5rem] ">Menu</Link>
          <Link href='/contact' className=" min:sm:p-1 max-sm:p-2 max-md:p-4 hover:bg-orange-700/50 p-3 text-[1.5rem] ">Contact Us</Link>
        </div>

        <Link href='/cart' className=" text-center content-center bg-blue-900 px-2 rounded-[5px] border border-blue-400 hover:(bg-blue-200 text-black)">
        <Image src='/img/cart.png' height={8} width={50} alt='Logo' className='relative '/>
        <span className="absolute top-0 right-10 bg-red-500 text-white px-1 rounded-[5px] "> {cartCount}</span>
        </Link>

      </nav>
    </header>
  );
}
