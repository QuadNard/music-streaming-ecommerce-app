import React, { useContext } from 'react'
import { ProductsContext } from '@/state/ProductsContext';
import Header from '@/components/Header'
import { motion } from 'framer-motion'
import PlayerCard from '@/components/PlayerCard'
import ShoppingCartSlideOver from '@/components/ShoppingCart'
import { useRef, useState, useEffect } from 'react'



function AudioPlayer () {
      const { products, loading } = useContext(ProductsContext)
       const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)



    return (
        <div>
            <Header  setCartSliderIsOpen={setCartSliderIsOpen}/>
            <ShoppingCartSlideOver
                        open={cartSliderIsOpen}
                   setCartSliderIsOpen={setCartSliderIsOpen}
                     />           
                     <div className='text-center bg-black '>
                        <h1 className='text-white'>Ob</h1>
                        </div>   
   <div className='container'>
        <div className='slideshow'>
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
   </div>
    )
}


export default AudioPlayer



/* 
<motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                         {products.map((product) => {
                            return (
                                <motion.div key={product.id} className='item'>
                                    <PlayerCard product={product} />
                                </motion.div>
                            )
                         })}
                    </motion.div>
                </motion.div>

*/  