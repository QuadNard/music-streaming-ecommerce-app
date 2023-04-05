import React from 'react';
import { motion } from 'framer-motion';
import ShoppingCartSlideOver from '@/components/ShoppingCart'
import Header from '../../components/Header';
import { useState } from 'react';

function Testimonials() {
   const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)
  const testimonial1 = {
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim eu felis egestas lobortis. Integer lobortis accumsan arcu non consequat.',
  };

  const testimonial2 = {
    name: 'Jane Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim eu felis egestas lobortis. Integer lobortis accumsan arcu non consequat.',
  };

  return (
    <div>
        <Header setCartSliderIsOpen={setCartSliderIsOpen} />
                 <ShoppingCartSlideOver
                        open={cartSliderIsOpen}
                   setCartSliderIsOpen={setCartSliderIsOpen}
                     />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl">
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4">
            <p className="text-gray-800 font-medium mb-2">{testimonial1.name}</p>
            <p className="text-gray-600">{testimonial1.text}</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-4">
            <p className="text-gray-800 font-medium mb-2">{testimonial2.name}</p>
            <p className="text-gray-600">{testimonial2.text}</p>
          </div>
        </motion.div>
      </div>
    </div>
     </div>
  );
}

export default Testimonials;
