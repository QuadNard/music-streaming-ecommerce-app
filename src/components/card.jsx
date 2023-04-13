import { useState, useEffect } from 'react'
import { Button } from './button'
import Image from 'next/image'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'
import { BsMusicPlayerFill } from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";
import Link from 'next/link';


const Card = ({ price }) => {
  const { items, addItem } = useCart()
  const [error, setError] = useState('')
  const { product, unit_amount } = price
  

  const addItemToCart = price => {
    const found = items.find(p => p.id === price.id)
    if (found) {
      setError('Item has been added!')
      return
    }
    addItem(price)
  }
 

  useEffect(() => {
    const timeout = setTimeout(() => setError(''), 3000)
    return () => clearTimeout(timeout)
  }, [error])

  return (
   <div className="group">
    <div  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
           <h3 className="mt-4 text-lg font-medium text-grey">{product.name}</h3>  
        <Image
            src={product.images[0]}
            alt='product image'
                    width={361}
                    height={361}
                  className="mt-[12.8] h-full w-full object-cover object-center" 
                     />
          </div> 
 <p className='mt-1 text-lg font-medium text-grey'>
            {(unit_amount / 100).toLocaleString('en-CA', {
              style: 'currency',
              currency: 'CAD'
            })}
          </p>

      <div className='space-x-8 space-y-5'>
                  <Link href="/audio/player">
               <Button >
                   <BsMusicPlayerFill className="h-5 w-5 text-white" />
                   Play Tunes
               </Button>  
               </Link>
                <Button onClick={() => addItemToCart(price) & toast.success(`${product.name} is added to cart`)}>
                    <AiOutlineShoppingCart className="h-5 w-5 text-white" /><span> Add to Cart</span>
                    {error && <p className='text-sm text-red-400'>{error}</p>}
            </Button>
              </div>
    
   </div>
  )
}

export default Card


 