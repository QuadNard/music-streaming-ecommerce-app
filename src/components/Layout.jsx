import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ShoppingCartSlideOver from './ShoppingCart'

const Layout = ({ children }) => {


  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout