import React from 'react'
import Helmet from 'react-helmet'
import Image from "next/image"
import Header from '../src/components/general/header'
import src from "../public/images/Gin_Bewertungsbogen_01.png"
import Link from 'next/link'


export default function gintasting() {
  const header = {
    path: '/images/headers/winter-small.jpeg',
    pathxs: '/images/headers/winter-small.jpeg',
    pathsm: '/images/headers/winter-small.jpeg',
    pathmd: '/images/headers/winter.jpeg',
    pathlg: '/images/headers/winter.jpeg',
    pathxl: '/images/headers/winter.jpeg',
    path2xl: '/images/headers/landscape.jpeg',
   
  }
  return (
    <div>
      <Helmet>
        <title>Gin Verkostung</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header header={header} />
      
      <section className="flex flex-col  pt-16 space-y-3">
        <h3 className ="text-center mb-20 mt-0  page-title" >Gin ist Kunst</h3>
        </section>
      <section className="grid grid-cols-6 md:grid-cols-12 pyz-4 mx-auto w-full md:w-5/6 lg:w-3/4 ">
        <div className="px-12 md:px-10 lg:px-20 my-auto col-span-6" >
        <Link href="/Gin_Tasting_Guide_und_Bewertungsbogen_Chiemsee_Gin.pdf">
        <Image src={src} width={617} height={864} layout="responsive"  alt=""/>
        </Link>
      </div>
      <div className="p-5 mx-auto flex flex-col justify-items-center my-auto col-span-6">
      <p>text fuer tasting</p>
      </div>
      <div className='flex justify-center col-span-6'>
      <Link href="/Gin_Tasting_Guide_und_Bewertungsbogen_Chiemsee_Gin.pdf">
        <a className="text-cgblue">
        Unser Bewertungsbogen
        </a>
      </Link>
      </div>
      </section>
 
    </div>
  )
}
