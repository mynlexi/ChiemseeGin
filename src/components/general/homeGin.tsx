import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import src from '../../../public/images/bootle_mockupsquare.jpg'
import { ArrowRight } from 'react-feather'

import { CSSTransition } from 'react-transition-group'

const Content = ()=> {
  return(
    <div className="md:border-l border-gray-700 md:pl-12 hidden my-auto">
    <p>
    Handverlesene Kräuter, kristallklares Gebirgsquellwasser und über 5 Generationen überlieferte Destillationskunst der Edelbrandmanufaktur Guggenbichler in Frasdorf am Chiemsee ergeben einen bayerischen Premium Gin der Extraklasse. Mit viel Liebe und Herzblut wird der Chiemsee Gin in kleinen exklusiven Chargen hergestellt. Qualität steht für uns an erster Stelle.
    </p>
</div>
  )
}

const ProductImage = () => {
  return (
    <div className="hover:w-full w-11/12 relative my-auto text-transparent  hover:text-black hidden transform">
              
    
    <Link href="/shop/chiemsee-premium-gin" >
      <a className="relative k">
    <Image src={src} layout="responsive" alt="" placeholder="blur" />
      </a>
    </Link>
    
    
   
  </div>
  )
}

export const HomePremiumGin = () => {
  const [show, setShow] = React.useState(false)
  const timeout = setTimeout(() => {
    setShow(true);
  }, 100);
  return (
    <section id="premiumgin" className=" mt-8">
      <h2 className="my-8 text-center">Der Chiemsee Gin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
              <CSSTransition classNames="fadeup" in={show} timeout={150} appear={true}>
                  <ProductImage />
              </CSSTransition>
              <CSSTransition classNames="fadedown" in={show} timeout={300} appear={true}>
                <Content />
              </CSSTransition>
             
            </div>
       <div className=" mx-auto px-20">
      <Link href="/shop/chiemsee-premium-gin" passHref><button className="hover:bg-white hover:text-cgblue text-white p-4 transition-colors bg-cgblue mx-auto flex space-x-4 hover:border-cgblue">
        <ArrowRight /> <div>Zum Gin</div>
      </button></Link>
      </div>

    </section>
  )
}


