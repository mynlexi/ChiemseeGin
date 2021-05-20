import React from 'react'
import SideCart from '../cart'
import { Footer } from './footer'
import { Navbar } from './navbar'

export default function Layout({children}) {
  return (
    <div>
      <Navbar />
   
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  )
}
