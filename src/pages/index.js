import Card from '@/components/Card';
import LandingPage from '@/components/LandingPage';
import React from 'react';
import Stripe from 'stripe';
import { Tab } from '@headlessui/react';



const HomePage = ({ prices = [] }) => {
 


  return (
    <div>
       <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <LandingPage />
       </main>
       <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
      <div className='space-y-10 py-16'>
        <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
              Collection
        </h1>
     <Tab.Group>
       <Tab.Panels className='mx-auto max-w-fit pt-10 pb-24 sm:px-4'>
            <Tab.Panel className='tabPanel'>
                {prices.map(price => (
                      <Card key={price.id} price={price}   />
                    ))}
            </Tab.Panel>
       </Tab.Panels>
     </Tab.Group>
      </div>


       </section>
    </div>
  )
}

export async function getServerSideProps() {
 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
 const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 13,
    expand: ['data.product'],
 })

 return {
    props: {
      prices,
    },
 }
}



export default HomePage