import Link from 'next/link'
import React from 'react'
import Menu from '../Layout/sideMenu'
import SideCart from '../cart'

export const Navbar = () => {
  return (
    <div className=" top flex justify-between w-full">
      <nav className="flex flex-row p-4 space-x-3">
        <Menu />
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
      <Link href="/products">
        <a>
          all products
        </a>
      </Link>
      <Link href="/recipes">
        <a>
          all recipes
        </a>
      </Link>
      </nav>
      <div className="p-4">
        <SideCart />
      </div>
    </div>
  )
}
