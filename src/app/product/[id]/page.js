
import Image from "next/image";
import { pizzaData } from "../../../dataLib/page";
import Price from "./price";
// import { Ingredient } from "./price";

export default async function product({params}) {
  

  const {id}= await params;
  const product = pizzaData.find((product)=> product.id === Number(id));
  if (!product){
    return <h1> No product found </h1>
  }
  

  return (

    <div className=" bg-orange-800 p-12 h-100vh w-full grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 ">
  <Image
    className=" w-[80vh] h-[80vh] bg-blue-900 p-1 border rounded-[20px] "
    src={product.image} alt={product.name} width={500} height={500}
  />
  <div className="bg-orange-900 border rounded-[20px] flex flex-col justify-around items-center gap-2 p-10 pl-0 pr-0 ">
        <div className=" flex flex-col justify-around items-center gap-5 ">
          <h1 className=" bg-orange-600 text-white text-center border rounded-[20px] text-[3rem] p-10 pt-0 pb-0 ">{product.name}</h1>
          <h1 className=" text-center text-[1.5rem] text-balance text-white " >{product.desc}</h1>
              <Price product={product} />
        </div>

        


  </div>
  </div>
  );
}