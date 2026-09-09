// import {pizzaData} from '@/dataLib/pizzaCards';
import {pizzaData} from '@/dataLib/pizzaCards';
import link from 'next/link';
import Card from './Card';

export default function product() {
  return (
    <>
    <div className=' text-center text-[2rem] text-white bg-gray-800 p-5 '>
      <h1 className="m-5"> What Makes Us Special</h1>
      <span className=' text-center text-[1.2rem] text-white bg-gray-900 p-5 flex flex-col gap-2 justify-center items-center rounded-[20px] '>
        <h1 className=" text-[1.5rem] font-bold ">Fresh Dough:</h1>
        <p> We make our dough from scratch every single morning.</p>
        <h1 className="text-[1.5rem] font-bold ">Secret Sauce:</h1>
        <p> Our sauce uses sweet tomatoes and a secret blend of herbs.</p>
        <h1 className="text-[1.5rem] font-bold ">Real Cheese:</h1>
        <p> We use 100% real, creamy mozzarella cheese.</p>
        <h1 className="text-[1.5rem] font-bold ">Brick Oven:</h1>
        <p> We fire our pizzas in a super-hot oven for that perfect, crispy crust.</p>
      </span>
    </div>
      <div className=' bg-white grid md:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 p-10 '>
        {pizzaData.map(product => (
          <Card key={product.id} product={product}/>
        ))}
      </div>
    </>
  )
}