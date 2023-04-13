import CartProvider from '@/context/CartContext'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import ProductsContextProvider from '@/state/ProductsContext'

function App({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
    <CartProvider>
        <Toaster />
     <Head>
      <meta  
      name="viewport"
          content="width=device-width, height=device-height, initial-scale=1" />
    </Head>
      <Component {...pageProps} />
    </CartProvider>
    </ProductsContextProvider>
  )
  
}


export default App