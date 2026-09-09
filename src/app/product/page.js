import {pizzaData} from '@/dataLib/page';
import Card from './Card';

export default function product() {
  return (
    <>
    <h1 className=' text-center text-[5rem] text-white font-bold bg-blue-900 p-2 border-b-10 border-gray-900 '>Our Menu</h1>
      <div className=' grid md:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2 p-5 bg-gray-200 '>
        {pizzaData.map(product => (
          <Card key={product.id} product={product}/>
        ))}
      </div>
    </>
  )
}
