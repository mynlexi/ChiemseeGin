import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FooterStyled } from './navbar/NavbarElements'
import Logo from '../../../public/chiemsee_gin_logo.svg'

export const Footer = () => {
  return (
  <FooterStyled className="p-4 bg-blue-100 text-cgblue">
    <div className="flex flex-col md:flex-row justify-between space-y-4">
      <div className=" w-1/2 md:w-1/5 mx-auto md:ml-12 md:my-8">
        <Link href="/">
       <Logo />
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-1  my-4">
          <Link href="/">
              <a className="links text-xl hover:text-gray-900 ">
              Home
              </a>
          </Link>
          <Link href="/shop/chiemsee-premium-gin">
              <a className="links text-xl hover:text-gray-900 ">
              Shop
              </a>
          </Link>
          <Link href="/rezepte">
              <a className="links text-xl hover:text-gray-900 ">
              Chiemgauer Rezepte
              </a>
          </Link>
          <Link href="/chiemsee">
              <a className="links text-xl hover:text-gray-900 ">
              Chiemsee
              </a>
          </Link>
          <Link href="/team">
              <a className="links text-xl hover:text-gray-900 ">
              Geschichte
              </a>
          </Link>
        </div>
        <div className="my-4">
            logo instagram logo ??
        </div>
       </div>
      </div>
      <div className="border-t border-cgblue flex justify-between">
        <p className="text-sm text-cgblue font-bold my-2">
        © 2021 by Chiemsee Gin
        </p>
        <div className="flex space-x-2 my-2">
            <Link href="/admin/kontakt">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            Kontakt
            </a>
            </Link>
            <Link href="/admin/dsvgo">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            DSVGO
            </a>
            </Link>
            <Link href="/admin/legal">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            AGB (not yet)
            </a>
            </Link>
            <Link href="/admin/legal">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            impressum(not yet)
            </a>
            </Link>
            <Link href="/admin/legal">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            Widerrufsrecht(not yet)
            </a>
            </Link>
        </div>
      </div>
  </FooterStyled>
  )
}
