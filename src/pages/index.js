import React, {useState} from 'react';
import { Container } from '@/components/container';
import { Button, IconWrapper } from '@/components/button';
import { Hero, HeroTitle, HeroSubtitle } from '@/components/hero';
import { Header } from '@/components/header';
import ShoppingCartSlideOver from '@/components/shoppingCart';
import { Logo } from '@/components/icons/logo';
import {BiChevronRight } from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"
import Card from '@/components/card';
import Link from 'next/link';
import Stripe from 'stripe';



export default function HomePage({ prices = [] }){
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)


  return (
    <div>
       <header>
              <Container>
                <Header setCartSliderIsOpen={setCartSliderIsOpen}  />
                 <ShoppingCartSlideOver
                        open={cartSliderIsOpen}
                   setCartSliderIsOpen={setCartSliderIsOpen}
                     />
              </Container>
        </header>
       <main className='bg-page-gradient pt-navigation-height'>
      <Container className="overflow-hidden py-[6.4rem]"> 
        <Hero>
          <Button href="/" variant="secondary" size="small">
            MaadSounds 2022 Release ➡ Built for scale{" "} 
            <IconWrapper>
              <BsArrowRight/>
              </IconWrapper>
          </Button>
          <HeroTitle >
            MaadYouDidThat   
            <br className="hidden md:block" /> Listens to your needs
          </HeroTitle>
          <HeroSubtitle>
             Powered by MaadSounds,  
              <br className="hidden md:block" /> Driven by Values
            </HeroSubtitle>
            <Button href="/" variant="primary" size="large">
              Get Started{" "}
              <IconWrapper>
                <BiChevronRight />
              </IconWrapper>
            </Button>

           <section>
            <div className="mt-[12.8rem] overflow-hidden">
            <div className="rounded-lg bg-hero-gradient bg-white bg-opacity-[0.01]">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div  className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                             {prices.map(price=> (
                             <Card key= {price.id} price={price}/>
                             ))}
                    </div>
                       </div>
            </div>
            </div>
           </section>
        </Hero>
      </Container>
     </main>

      <footer className="mt-12 border-t border-border-white py-[5.6rem] text-sm">
      <Container className="flex flex-col lg:flex-row justify-between">
        <div>
           <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-grey">
                 <Logo className="mr-4 h-4 w-4" /> MaadSounds
            </div>
               <div className="mt-auto flex space-x-4 text-grey">
                
                social links
                
                </div>
           </div>
           </div>
           <div className="flex flex-wrap">
               {footerLinks.map((column, i) => (
                <div className="mt-10 min-w-[50%] lg:min-w-[18rem] lg:mt-0" key={i} >
                <h3 className="mb-3 font-medium">{column.title}</h3>
                <ul>
                  {column.links.map((link, i) => (
                    <li className="[&_a]:last:mb-0" key={i}>
                      <Link className="mb-3 block text-grey hover:text-white transition-colors" href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
                </div>
               ))}
           </div>
        </Container>
      </footer>
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

const footerLinks = [
  {
    title: "Company",
    links: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Docs", href: "#" },
    ],
  },
   {
    title: "Resources",
    links: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Docs", href: "#" },
    ],
  },
   {
    title: "Support",
    links: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Docs", href: "#" },
    ],
  }
]

