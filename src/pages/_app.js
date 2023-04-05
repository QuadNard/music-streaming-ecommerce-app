import CartProvider from '@/context/CartContext'
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Toaster } from 'react-hot-toast'
import ProductsContextProvider from '@/state/ProductsContext'

function App({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
    <CartProvider>
      <Layout>
        <Toaster />
      <Component {...pageProps} />
      </Layout>
    </CartProvider>
    </ProductsContextProvider>
  )
  
}


export default App