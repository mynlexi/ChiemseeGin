import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import src from '../../../public/images/bootle_mockupsquare.jpg'

import { CSSTransition } from 'react-transition-group'

const Content = ()=> {
  return(
    <div className="md:border-l border-gray-700 md:pl-12 hidden">
    <p>
    Chiemsee Gin ist der Premium Gin vom bayerischen Meer – angenehm herb mit frischen
    Noten. Unser Wacholderschnaps wird in der seit 1892 bestehenden Edelbrandmanufaktur
    Guggenbichler in traditioneller Handarbeit mit handverlesenen Zutaten hergestellt. Ein
    außergewöhnlicher und facettenreicher Gin von und für seine bayerische Heimat und die
    Menschen, die sie/diese so sehr lieben.
    </p>
</div>
  )
}

const ProductImage = () => {
  return (
    <div className="w-full relative my-auto text-transparent  hover:text-black hidden">
              
    
    <Link href="/shop/chiemsee-premium-gin" >
      <a className="relative k">
    <Image src={src} layout="responsive" alt="" placeholder="blur" />
      </a>
    </Link>
    
    
    <div className="relative bottom-6 left-0">
      <button className=" text-center mx-auto w-full">
        -{'>'} Zum Gin
      </button>
      </div>
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
      <h2 className="my-8 ">Chiemsee Gin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <CSSTransition classNames="fadeup" in={show} timeout={150} appear={true}>
                  <ProductImage />
              </CSSTransition>
              <CSSTransition classNames="fadedown" in={show} timeout={300} appear={true}>
                <Content />
              </CSSTransition>
             
            </div>
    </section>
  )
}


