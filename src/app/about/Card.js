'use client';
import Link from "next/link"
import Image from "next/image"

// export default function Card({product}) {
//   return (
//     <Link href={`/product/${product.id}`} className=" shadow-xl/100 bg-orange-800 flex max-sm:flex-col justify-center items-center m-5 rounded-tr-[20px] rounded-bl-[10px] outline-8 ">
//       <Image className=" h-50 w-50 m-2 border-4 border-gray-600 rounded-[10px] " loading="lazy" src={product.image} alt={product.name} height={500} width={500} />
//       <div className=" flex flex-col justify-center items-center gap-1  ">
//       <h1 className="text-white text-[1.5rem] text-center ">{product.name}</h1>
//       <h1 className="text-gray-400 text-[2rem] "> $ {product.price[1]}</h1>
//       <h1 className="text-blue-100 text-balance text-center m-2 ">{product.desc}</h1>
//       </div>
//     </Link>
//   )
// }


// import Image from "next/image";

export default function Card({product}) {
  return (
    <>
    <Link href={`/about/${product.id}`} className=" bg-orange-700 text-white flex justify-around items-center border border-black rounded-[20px] overflow-hidden shadow-xl/20 fill-white drop-shadow-xl/50 ">
      <Image className="contrast-120 h-40 p-5 w-40 bg-orange-700 border-r border-r-black " src={product.image} height={500} width={500} alt="Lamao Pizza" />
      
      <div className="bg-orange-700 p-2 flex flex-col justify-around items-center gap-1 text-center items-center">
      <h1 className="text-[1.5rem]">{product.name}</h1>
      <h1 className="text-[1.2rem] text-shadow-lg text-blue-400 text-[300]">$ {product.price[1]}</h1>
      <p className="text-balance">{product.desc}</p>
      
      </div>
    </Link>
    </>
  )
}