import Link from 'next/link';
import { Logo } from './icons/logo';
import { useEffect, useState } from 'react';
import { HamburgerIcon } from './icons/hamburger';
import { Container } from './container';
import { Button } from './button';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import classNames from 'classnames';


 export const Header = ({ setCartSliderIsOpen }) => {
  const { items } = useCart()
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)
 


 // Adds scroll lock when the hamburger menu is open
    useEffect(() => {
      const html = document.querySelector("html");
      if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
    }, [hamburgerMenuIsOpen]);

    // Closes the hamburger menu when the user resizes the window
    useEffect(() => {
      const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

      window.addEventListener("orientationchange", closeHamburgerNavigation);
      window.addEventListener("resize", closeHamburgerNavigation);

return () => {
      window.addEventListener("orientationchange", closeHamburgerNavigation);
      window.addEventListener("resize", closeHamburgerNavigation);
};
    }, [setHamburgerMenuIsOpen]);


  return (
      <header className='fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]'>
        <Container className='flex h-navigation-height'>
            <Link  className='flex items-center text-md' href='/'>
                <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> MaadSounds 
            </Link>
      
        <div
              className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
          )}         
          >
            <nav 
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
            >
              <ul 
               className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
              >
                <li>
                  <Link href='/'>Home</Link>
                </li>
                 <li>
                  <Link href='/'>Tunes</Link>
                </li>
                 <li>
                  <Link href='/' className='md:hidden lg:block'>Business</Link>
                </li>
                 <li>
                  <Link href='/' className='md:hidden lg:block'>Support</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='ml-auto h-full flex items-center'>
            <span className=' text-sky-700 text-sm mr-0' href='/'>({items.length})</span>
               <span className='sr-only'>items in cart, view bag</span>
               <Button href="#" onClick={() => setCartSliderIsOpen(open => !open) & toast.success(`Processed to checkout`)}>
                  Cart
               </Button>
          </div>




        <button className='ml-6 md:hidden' onClick={() => setHamburgerMenuIsOpen((open) => !open) }>
             <span className='sr-only'>Toggle menu</span>
              <HamburgerIcon />
        </button>
          </Container>
      </header>
  )
}


