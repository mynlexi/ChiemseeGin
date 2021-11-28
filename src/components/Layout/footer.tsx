import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FooterStyled } from './navbar/NavbarElements'
import LogoPNG from '../../../public/images/chiemsee_gin_logo_farbig.png'
import { Instagram } from 'react-feather'

export const Footer = () => {
  return (
  <FooterStyled className="p-4 bg-blue-100 text-cgblue text-center md:text-left">
    <div className="flex flex-col md:flex-row justify-between space-y-4">
      <div className=" w-1/2 md:w-1/5 mx-auto md:ml-12 md:my-8">
        <Link href="/" passHref>
          {/*  @ts-ignore  This is only a issue here not in the sidebar or navbar ??*/}
          <div className=" w-40 sm:w-64 h-32 mx-auto">
            <Image src={LogoPNG} alt="logo" placeholder="blur" layout="responsive" />
         </div>
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-1  mb-4">
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
          <Link href="/gintasting">
              <a className="links text-xl hover:text-gray-900 ">
                  Tasting & Rezepte
              </a>
          </Link>
          <Link href="/ueber-uns">
              <a className="links text-xl hover:text-gray-900 ">
              Über Uns
              </a>
          </Link>
                <Link href="/standorte">
                    <a className="links text-xl hover:text-gray-900 ">
                    Standorte
                    </a>
                </Link>

        
        <div className="my-4 mx-auto md:mx-0">
            <a href="https://www.instagram.com/chiemseegin/" rel="noreferrer noopener" target="_blank" className="flex flex-row ">
              <button className="py-2 ml-2 w-6">
                <Instagram /> 
              </button>
              <div className="py-2 ml-2 w-18">Instagram</div>
            </a>
        </div>
        </div>
       
       </div>
      </div>
      <div className="border-t border-cgblue flex flex-col-reverse md:flex-row justify-between">
        <p className="text-sm text-cgblue text-center md:text-left font-bold my-2">
        Chiemsee Premium Gin
        </p>
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row space-x-2 my-2">
            <Link href="/kontakt">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            Kontakt
            </a>
            </Link>
            <Link href="/datenschutz">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            Datenschutz
            </a>
            </Link>
            <Link href="/AGB">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            AGB
            </a>
            </Link>
            <Link href="/versandinformation">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            Versandinformationen
            </a>
            </Link>
            <Link href="/impressum">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            Impressum
            </a>
            </Link>
            <Link href="/widerrufsrecht">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            Widerrufsrecht
            </a>
            </Link>
            <Link href="/kontakt">
            <a className="links text-sm text-cgblue hover:text-gray-900 mb-2 ">
            Händler werden
            </a>
            </Link>
        </div>
      </div>
  </FooterStyled>
  )
}
