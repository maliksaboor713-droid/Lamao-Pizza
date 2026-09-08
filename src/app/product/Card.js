import Link from "next/link"
import Image from "next/image"

export default function Card({product}) {
  return (
    <Link href={`/product/${product.id}`} className=" shadow-xl/100 bg-orange-800 flex max-sm:flex-col justify-center items-center m-5 rounded-tr-[20px] rounded-bl-[10px] outline-8 ">
      <Image className=" h-50 w-50 m-2 border-4 border-gray-600 rounded-[10px] " loading="lazy" src={product.image} alt={product.name} height={500} width={500} />
      <div className=" flex flex-col justify-center items-center gap-1  ">
      <h1 className="text-white text-[1.5rem] text-center ">{product.name}</h1>
      <h1 className="text-gray-400 text-[2rem] "> $ {product.price[1]}</h1>
      <h1 className="text-blue-100 text-balance text-center m-2 ">{product.desc}</h1>
      </div>
    </Link>
  )
}
