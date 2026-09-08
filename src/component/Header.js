'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Header() {
    const { cartCount } = useCart();
  return (
<header className="h-[62px] bg-orange-900 text-white border-b border-b-black">
      <nav className=" flex justify-between items-center mr-10 ml-5">

        <div className=" min-sm:hidden max-sm:hidden lg:block text-center content-center text-[2rem] p-[4px] text-[900] ">Order Now !</div>

        <div className=" min-sm:text-[1rem] h-[50px] w-150 flex justify-between items-center text-[5rem] text-white border rounded-[6px] overflow-hidden outline-2 outlineline-offset-1 outline-orange-200 ">
          <Link href='/' className=" min-sm:hidden max-sm:hidden md:block hover:bg-orange-800 p-7 text-[1.5rem]">Home</Link>
          <Link href='#' className=" max-sm:hidden max-sm:hidden  hover:bg-orange-800 p-7 text-[1.5rem] ">About</Link>
        <Image src='/img/logo.png' height={120} width={120} alt='Logo' className=' bg-black border rounded-full border-blue-800 hover:bg-blue-900 active:bg-blue-800'></Image> 
          <Link href='/product' className=" min:sm:p-1 max-sm:p-2 max-md:p-4 hover:bg-orange-800 p-3 text-[1.5rem] ">Products</Link>
          <Link href='#' className=" min:sm:p-1 max-sm:p-2 max-md:p-4 hover:bg-orange-800 p-3 text-[1.5rem] ">Services</Link>
        </div>

        <Link href='/cart' className=" text-center content-center hover:(bg-blue-200 text-black border-blue-400)">
        <Image src='/img/cart.png' height={8} width={50} alt='Logo' className='relative '/>
        <span className="absolute -top-2 -right-[-30px] bg-red-500 text-white p-1 "> {cartCount}</span>
        </Link>

      </nav>
    </header>
  );
}
