import Image from 'next/image';
import React, {useState} from 'react';
import { Container } from '@/components/container';
import { Button, IconWrapper } from '@/components/button';
import { Hero, HeroTitle, HeroSubtitle } from '@/components/hero';
import { Header } from '@/components/header';
import ShoppingCartSlideOver from '@/components/shoppingCart';
import Logo from '../assets/Headphones.png';
import {BiChevronRight } from "react-icons/bi"
import {SlSocialSpotify} from "react-icons/sl"
import {TbBrandBeats} from "react-icons/tb"
import {AiOutlineInstagram,  AiOutlineFacebook} from "react-icons/ai"
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
          <Link href='/business'>
          <Button variant="secondary" size="small">
            MaadSounds 2023 Release ➡ Learn more{" "} 
            <IconWrapper>
              <BsArrowRight/>
              </IconWrapper>
          </Button>
          </Link>
          <HeroTitle >
            MaadYouDidThat   
            <br className="hidden md:block" /> Listen to your needs
          </HeroTitle>
          <HeroSubtitle>
             Powered by MaadSounds,  
              <br className="hidden md:block" /> Driven by Values
            </HeroSubtitle>
            <Link  href='/audio/player'>
            <Button variant="primary" size="large">
             Listen Now {" "}
              <IconWrapper>
                <BiChevronRight />
              </IconWrapper>
            </Button>
            </Link>
         <div className='flex flex-col items-center mt-15'>
            <svg className="animate-bounce w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
               <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
           </svg>
           </div>
       
           <section>
            <div className="mt-[12.8rem] overflow-hidden">
                <HeroTitle className=' underline mb-3'>Shop</HeroTitle>
            <div className="rounded-lg bg-hero-gradient bg-white bg-opacity-[0.01]">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                   
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
                 <Image src={Logo} alt='logo' width={100} height={100} className="mr-4 h-4 w-4" /> MaadSounds
            </div>
               <div className="mt-auto flex space-x-4 text-grey ">
                  <Link href='https://www.beatstars.com/maadyoudidthat'>
                  <TbBrandBeats className="h-6 w-6 hover:text-white transition-colors" />
                  </Link>
                  
                  <Link href='/'>
                  <SlSocialSpotify className="h-6 w-6 hover:text-white transition-colors" />
                </Link>

                  <Link href='/'>
                  <AiOutlineInstagram className="h-6 w-6 hover:text-white transition-colors" />
               </Link>
                  
                  <Link href='/'>
                  <AiOutlineFacebook className="h-6 w-6 hover:text-white transition-colors" />
                 </Link>
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

