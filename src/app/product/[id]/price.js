'use client';
import { useState } from "react";
import Image from "next/image";
import { useCart } from "../../../context/CartContext";

export default function Price({product}) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const [size, setSize]= useState(1);
    const [ingredient ,setIngredient]= useState([]);

    const Handle=(e,ingredient)=> {
      const checked= e.target.checked;
      if(checked){
        setIngredient(prev => [...prev,ingredient])
      } else {
        setIngredient(prev=> prev.filter((item)=>  item.id !== ingredient.id ))
      }
    }
    const totalPrice= product.price[size] + ingredient.reduce((total,item) => total + item.price,0)

  return (
    <>

    <div className="flex gap-12 text-center bg-orange-700 text-white p-10 border rounded-[20px] ">
    {/* <div className=" text-[3rem] p-2 bg-blue-900 border rounded-[20px] " > $ {product.price[size]} </div> */}
    <div className=" text-[3rem] p-2 bg-blue-900 border rounded-[20px] " > $ {totalPrice}</div>
    <div className=" " onClick={()=> setSize(0)}>
      <label id="small">
        <h1>Small ({product.price[0]} )</h1>
        <Image src='/img/size.png' height={40} width={40} alt="size" name="small" id="small" />
      </label>
    </div>
    <div className=" " onClick={()=> setSize(1)}>
      <label id="medium">
        <h1>Medium ({product.price[1]} ) </h1>
        <Image src='/img/size.png' height={50} width={50} alt="size" name="medium" id="medium" />
      </label>
    </div>
    <div className=" " onClick={()=> setSize(2)}>
      <label id="large">
        <h1>Large ({product.price[2]} ) </h1>
        <Image src='/img/size.png' height={70} width={70} alt='Size' name="large" id="large" />
      </label>
    </div>

    </div>

    <div className="flex flex-wrap gap-2 bg-orange-700/50 rounded-[10px] text-white m-2 p-7 pt-2 pb-2">
  {product.extraIngredients.map((extraIngredient) => (
    <label className="flex gap-2 cursor-pointer" key={extraIngredient.id}>
      <input type="checkbox" name="ingredient" checked={ingredient.some(
          (item) => item.id === extraIngredient.id
        )}
        onChange={(e) =>
          Handle(e, extraIngredient)
        }
      />

      <h1>
        {extraIngredient.name} ($ {extraIngredient.price})
      </h1>
    </label>
  ))}
</div>



        <div className=" ">
          <label id="quantities">
          <input className=" bg-blue-900/80 hover:bg-blue-900/100 m-2 p-6 pt-2 pb-2 rounded-[3px] text-[1.4rem] text-white no-spinner "
            onChange={(e) => setQuantity(Number(e.target.value))} min={1} id='quantities' defaultValue={1} placeholder="Quantities ..." type="number" name="quantity" />
          </label>
          <button className=" text-[1.5rem] text-gray-200 bg-orange-600/50 hover:bg-orange-600/80 active:bg-orange-600/50 border rounded-[10px] m-2 p-4 pt-2 pb-2 " 
          onClick={() => addToCart(product, quantity, size,ingredient)} > Add to Cart</button>
        </div>

    
    </>
  )
}
