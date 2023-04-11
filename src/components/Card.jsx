import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useCart } from '../context/CartContext'
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
   <div className='w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto
   '>
      
      <div className='rounded-full flex items-center justify-center'>
         <h4 className='text-white'>{product.name}</h4>
      </div>
      
    
        <Image
            src={product.images[0]}
            alt={product.description}
            className='h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100'
            layout='fill'
          />
         <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
      <Link href='/audio/player'>
        <div className="h-10 w-10 transform bg-green-400 rounded-full flex items-center justify-center transition duration-500 hover:scale-125 hover:bg-green-600">
            <BsMusicPlayerFill className="text-white text-xl ml-[1px]" />     
        </div>
        </Link>

 <button onClick={() => addItemToCart(price)}>
        <div className="h-10 w-10 transform bg-green-400 rounded-full flex items-center justify-center transition duration-500 hover:scale-125 hover:bg-green-600">     
          <AiOutlineShoppingCart/><span className='sr-only'>, {product.name}</span>
        {error && <p className='text-sm text-red-400'>{error}</p>}
             </div>
  </button>
        <div className="text-[13px]">
          <h4 className="font-extrabold truncate w-30">{product.name}</h4>
        <p className='relative text-lg font-semibold text-white'>
            {(unit_amount / 100).toLocaleString('en-CA', {
              style: 'currency',
              currency: 'CAD'
            })}
          </p>
        </div>


    </div>

     
   </div>
  )
}

export default Card

