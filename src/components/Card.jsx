import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useCart } from '../context/CartContext'

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
    <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10 cursor-pointer transition hover: opacity-100'>
        <div className='relative h-64 w-full md:h-72'>
          <Image
            src={product.images[0]}
            alt={product.description}
            className='object-scale-down'
            layout='fill'
          />
        </div>
        <p className='relative text-lg font-semibold text-white'>
            {(unit_amount / 100).toLocaleString('en-CA', {
              style: 'currency',
              currency: 'CAD'
            })}
          </p>
        <div className='relative mt-4'>
          <h3 className='text-sm font-medium text-gray-900'>{product.name}</h3>
          <p className='mt-1 text-sm text-gray-500'>{product.description}</p>
        </div>
      <div className='mt-6' >
        <button
         onClick={() => addItemToCart(price)}
          className='relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200'
        >
          Add to Cart<span className='sr-only'>, {product.name}</span>
        </button>
        {error && <p className='text-sm text-red-400'>{error}</p>}
      </div>
    </div>
  )
}

export default Card

