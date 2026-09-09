import Image from "next/image";
import Featured from "../component/Featured";
// import Pizzalist from "../component/Pizzalist";
import PizzaCard from "./PizzaCard/page";
import { pizzas } from "@/dataLib/pizzaCard";
import { pizzaData } from "@/dataLib/pizzaCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
    <Featured />

    <div className='h-[1fr] mt-10 gap-5 text-center text-balance flex flex-col justify-around items-center'>
    <div >
      <h1 className='text-[2rem]  font-(900)'>Delicious Pizza at Lamao Pizza</h1>
      <p className='text-[1.2rem] font-(900)'>Our website offers and sell almost all type of amazing flavoured pizza</p>
    </div>
    <div>
      <h1 className='text-[2em] font-(900)'>Slice into Happiness: Hot, Fresh, and Made with Love!</h1>
      <p className='text-[1.2rem] font-(900)'>Welcome to Lama, where every pie is crafted with hand-tossed dough, rich vine-ripened tomato sauce, and 100% real melted mozzarella. Order online now for fast delivery or easy pickup!</p>
    </div>
    <div className=' text-center text-balance flex flex-col justify-center items-center'>
    <h1 className='text-[2em]  font-(900)'> Our Recipe for Perfection</h1>
    <p className='text-[1.2rem] font-(900)'>At Lama, we believe great pizza starts with honest ingredients. 
      Founded with a passion for authentic flavors, 
      our master bakers use traditional techniques combined with bold local favorites. 
      Whether you crave a classic Pepperoni, a loaded Supreme, or a custom creation,
      we bake every pizza to golden perfection. Come taste the tradition today!</p>
    </div>
    </div>

    <div className="grid grid grid-cols-4 gap-10 m-10 my-25 ">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>

    </main>
  );
}
