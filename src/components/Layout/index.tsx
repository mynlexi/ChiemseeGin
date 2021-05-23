import React from 'react'
import { useCheckoutUpdate } from '../../hooks/useCheckoutId'
import SideCart from '../cart'
import { Footer } from './footer'
import { Navbar } from './navbar'


export default function Layout({children}) {
  const {addId, clearId} = useCheckoutUpdate()
  React.useEffect(() => {
    addId()
  }, [])
  return (
    <div>
      <Navbar />
   
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  )
}
