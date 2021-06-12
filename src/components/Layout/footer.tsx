import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FooterStyled } from './navbar/NavbarElements'
import Logo from '../../../public/chiemsee_gin_logo.svg'

export const Footer = () => {
  return (
  <FooterStyled className="p-4 bg-gray-300">
    <div className="flex flex-col md:flex-row justify-between space-y-4">
      <div className=" w-1/2 md:w-1/5 mx-auto md:ml-12 md:my-8">
        <Link href="/">
       <Logo />
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-1  my-4">
          <Link href="/">
              <a className="links text-xl hover:text-gray-600 ">
              Home
              </a>
          </Link>
          <Link href="/shop/chiemsee-gin">
              <a className="links text-xl hover:text-gray-600 ">
              Shop
              </a>
          </Link>
          <Link href="/rezepte">
              <a className="links text-xl hover:text-gray-600 ">
              Chiemgauer Rezepte
              </a>
          </Link>
          <Link href="/chiemsee">
              <a className="links text-xl hover:text-gray-600 ">
              Chiemsee
              </a>
          </Link>
          <Link href="/team">
              <a className="links text-xl hover:text-gray-600 ">
              Geschichte
              </a>
          </Link>
        </div>
        <div className="my-4">
            logo instagram logo ??
        </div>
       </div>
      </div>
      <div className="border-t border-black flex justify-between">
        <p className="text-sm text-gray-900 font-bold my-2">
        © 2021 by Chiemsee Gin
        </p>
        <div className="flex space-x-2 my-2">
            <Link href="/admin/legal">
            <a className="links text-sm text-gray-900 hover:text-gray-600 mb-2 ">
            Kontakt (not yet)
            </a>
            </Link>
            <Link href="/admin/dsvgo">
            <a className="links text-sm text-gray-900 hover:text-gray-600 mb-2 ">
            DSVGO
            </a>
            </Link>
            <Link href="/admin/legal">
            <a className="links text-sm text-gray-900 hover:text-gray-600 mb-2 ">
            AGB (not yet)
            </a>
            </Link>
            <Link href="/admin/legal">
            <a className="links text-sm text-gray-900 hover:text-gray-600 mb-2 ">
            impressum(not yet)
            </a>
            </Link>
            <Link href="/admin/legal">
            <a className="links text-sm text-gray-900 hover:text-gray-600 mb-2 ">
            Widerrufsrecht(not yet)
            </a>
            </Link>
        </div>
      </div>
  </FooterStyled>
  )
}
