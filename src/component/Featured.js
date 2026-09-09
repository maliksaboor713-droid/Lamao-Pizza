'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Featured() {
  const [current, setCurrent]= useState(0)
  const images=[
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ]
  const prevSlide=()=> {
    setCurrent(prev => (prev - 1 + images.length) % images.length);
  }
  const nextSlide=()=> {
    setCurrent(prev => (prev + 1) % images.length);
  }

  useEffect((e)=> {
    setInterval(() => {
  nextSlide();
}, 5000);
  },[images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      }
      if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex items-center relative inline-block bg-orange-900">

        <button onKeyDown={(e)=> {if(e.key === 'ArrowLeft') prevSlide()}} onClick={prevSlide}><img src='/img/arrowl.png' alt='images' height={40} width={40} className=" hover:bg-white/5 active:bg-white/10 hover:rounded-xl backdrop-blur-none h-20 w-20 z-[50] absolute left-0 top-[42%] " /></button>
        <Image src={images[current]} alt='Delicious Lamao Pizza' height={1100} width={1100}  className="contrast-120 h-[90vh] w-[100vw] md:h-[1fr] md:1fr block "/>
        <button onKeyDown={(e)=> {if(e.key === 'ArrowRight') nextSlide()}} onClick={nextSlide}><img src='/img/arrowr.png' alt='images' height={40} width={40} className="hover:bg-white/5 active:bg-white/10 hover:rounded-xl backdrop-blur-none h-20 w-20 z-[50] absolute right-0 top-[42%] "/></button>
        
        <div className=" absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_,index)=> (
          <button key={index} onClick={()=> setCurrent(index)} className={`h-2 w-2 rounded-full ${current === index ? "bg-white":"bg-white/10"}`}/>
        ))}
        </div>

      </div>
    </>
  )
}
