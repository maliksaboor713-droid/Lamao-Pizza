import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <footer>
      <div className="h-[clamp(auto,30vmin)] bg-orange-900 flex max-sm:flex-col md:flex-row justify-around items-center border-t ">
        <Image className="h-[30vh] w-[30vw] m-7 ml-20 rounded-[10px] border border-white contrast-120 " src='/img/bg.png' loading="lazy" height={500} width={500} alt="bg.png" />
        <div className=' text-center text-white p-5 m-5 text-balance flex flex-col justify-center items-center'>
    <h1 className='text-[2em]  font-(900)'> Our Recipe for Perfection</h1>
    <p className='text-[1.2rem] font-(900)'>At Lama, we believe great pizza starts with honest ingredients. 
      Founded with a passion for authentic flavors, 
      our master bakers use traditional techniques combined with bold local favorites. 
      Whether you crave a classic Pepperoni, a loaded Supreme, or a custom creation,
      we bake every pizza to golden perfection. Come taste the tradition today!</p>
    </div>
      </div>
      <div className="h-12 bg-orange-900 text-white text-[1.2rem] text-center content-center border-t border-t-black">
        <p>© 2026 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
