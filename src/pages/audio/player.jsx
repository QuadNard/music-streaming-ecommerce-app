import React, { useContext } from 'react'
import { ProductsContext } from '@/state/ProductsContext';
import { HeroTitle } from '@/components/hero';
import { Button } from '@/components/button';
import Link from 'next/link'
import PlayerCard from '@/components/playerCard'





function AudioPlayer () {
      const { products, loading } = useContext(ProductsContext)



    return (
        <div className="container mx-auto px-6 py-16">
            <div className="mx-auto sm:w-1/2 lg:w-5/12 xl:w-[30%]">
          <div>
             <HeroTitle className="mt-2 font-bold text-lg underline">Latest Tracks </HeroTitle>
        </div>
        <Link href="/">
          <Button variant="secondary" size="small" className='no-underline hover:underline ...'>
            Go back To Home
            </Button>
            </Link>
        {products.map((product ) => (
            <div key={product.id} 
            >
            <PlayerCard product={product} key={product.id} />
            </div>
        ))}
        </div>
        </div>
    )
}


export default AudioPlayer

