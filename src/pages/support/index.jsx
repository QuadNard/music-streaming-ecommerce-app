import { Container } from '@/components/container';
import { HeroTitle} from '@/components/hero';
import { Header } from '@/components/header';
import ShoppingCartSlideOver from '@/components/shoppingCart';
import Link from 'next/link';
import React, {useState} from 'react';


const stats = [
  { name: 'Technical Support', description: 'Give us a few details and we will offer the best solution. Connect email to maadsound.info@gmail.com', href: 'mailto:maadsound.info@gmail.com' },
  { name: 'Terms of Use',description: 'Legal information & notice, ownership of content; Agreement to terms of use', href: '/support/locations'},
  { name: 'Guidelines', description: 'Enterprise guidelines for using MaadSounds Trademarks and Copyrights ', href: '/support/locations'},
  { name: 'Stripe Payment Support', description: 'Problem with type or your not source if your payment went through contact us.', href: '/support/locations' },
]

export default function Support() {
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)

  return (
    <div className="relative isolate overflow-hidden bg-page-gradient">
      <header>
              <Container>
                <Header setCartSliderIsOpen={setCartSliderIsOpen}  />
                 <ShoppingCartSlideOver
                        open={cartSliderIsOpen}
                   setCartSliderIsOpen={setCartSliderIsOpen}
                     />
              </Container>
        </header>
      <Container>
        <div className="mx-auto pt-navigation-height max-w-2xl lg:mx-0">
          <HeroTitle className='text-6xl font-bold'>Support Center</HeroTitle>
           <p className="mt-6 text-md leading-8 text-gray-300">
         Have a question you can not find the answer to here? Contact us directly!
          </p>
        </div>
       <section className='bg-gray-100 dark:bg-gray-900 py-10 px-12'>
        <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
             {stats.map((stat, i)   => (
            <div key={i} className='my-8 shadow-lg shadow-gray-200 dark:shadow-gray-900 rounded-lg bg-hero-gradient bg-opacity-[0.01]dark:bg-gray-800 duration-300 hover:-translate-y-1 border border-white-a08'>
                <a href={stat.href} className='cursor-pointer'>
                      <div>
                           <div className='p-4'>
                              <p className='text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300'>{stat.name}</p>
                              <h3 className='leading-5 text-gray-500 dark:text-gray-400'>{stat.description}</h3>
                           </div>
                      </div>
                </a>
            </div>
              ))}
        </div>
       </section>
      
  
  
      </Container>
    </div>
  )
}