import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Modal from './Modal'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import {HiOutlineMagnifyingGlass} from 'react-icons/hi'
import { TfiClose } from "react-icons/tfi";
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import Link from 'next/link'


const Header = ({ setCartSliderIsOpen }) => {
  const { items } = useCart()
  const [open, setOpen] = useState(false)
 


 // Hamburger Menu Functionality
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
}

  return (
  <div>
      <header className="flex justify-between items-center font-bold px-12 p-4 text-sm ">
        <div>
             {/* Logo} */}
            <Image
              className="h-4 w-10/12"
              src={Logo}
                alt="Logo"
            />
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <Link href="/"> Home </Link>     
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
               <Link href="/business/about"> Business </Link>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                <Link href="/support/testimonials"> Support </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:inline">
         <div
            className='group p-2 flex items-center cursor-pointer'
            onClick={() => setCartSliderIsOpen(open => !open)}
          >
            <HiOutlineShoppingBag
              className='flex-shrink-0 h-5 w-5 text-sky-700 group-hover:text-sky-800'
            />
             <span className=' text-sky-700 group-hover:text-sky-800'>({items.length})</span>
            <span className='sr-only'>items in cart, view bag</span>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={handleNav} className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
            Menu
          </button>
        </div>
        <div
          className={
            nav
              ? "bg-transparent absolute right-0 top-0 w-80 h-full z-10"
              : "fixed right-[-100%]"
          }
        >
          <div className="flex justify-end pr-8 pt-8">
            <TfiClose onClick={handleNav} className="rounded p-1 hover:bg-black/5" size={28} />
          </div>
          <ul className="pt-8 px-6">
             <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                 <Link href="/"> Home </Link>     
            </li>  
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
          <Link href="/business/about"> Business </Link>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                 <Link href="/support/testimonials"> Support </Link>
            </li>    
             <li className="py-3 pl-3 hover:rounded hover:bg-black/5"  onClick={() => setCartSliderIsOpen(open => !open)}>
                Cart 
                <span className=' text-sky-700 group-hover:text-sky-800'>({items.length})</span>
                <span className='sr-only'>items in cart, view bag</span>
            </li>   
          </ul>
        </div>
      </header>
  </div>
  )
}

export default Header

