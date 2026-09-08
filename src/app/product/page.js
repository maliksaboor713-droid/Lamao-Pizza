import {pizzaData} from '@/dataLib/page';
import Card from './Card';

export default function product() {
  return (
      <div className=' bg-orange-700 grid md:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2 p-10 '>
        {pizzaData.map(product => (
          <Card key={product.id} product={product}/>
        ))}
      </div>
  )
}
