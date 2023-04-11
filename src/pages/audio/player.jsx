import React, { useContext } from 'react'
import { ProductsContext } from '@/state/ProductsContext';
import { motion } from 'framer-motion'
import Link from 'next/link'
import PlayerCard from '@/components/PlayerCard'





function AudioPlayer () {
      const { products, loading } = useContext(ProductsContext)



    return (
        <div className="container mx-auto px-6 py-16">
            <div className="mx-auto sm:w-1/2 lg:w-5/12 xl:w-[30%]">
          <div>
            <h1 className="text-3xl p-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Music Player </h1>
             <p className="mt-2 text-gray-600">Listen to are collection now</p>
        </div>
            <Link href="/">
          <a className='no-underline hover:underline ...'>Go back To Home</a>
            </Link>
        {products.map((product, index) => (
            <motion.div
            animate={'animate'}
            initial={'initial'}
            key={index}
            >
            <PlayerCard product={product} key={product.id} />
            </motion.div>
        ))}
        </div>
        </div>
    )
}


export default AudioPlayer

