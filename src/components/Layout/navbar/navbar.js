import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Menu from '../sideMenu'
import SideCart from '../../cart'
import { useScrollDirection } from '../../../hooks'
import { StyledHeader, StyledLinks, StyledNav } from './NavbarElements'
import Logo from '../../../../public/chiemsee_gin_logo.svg'
import LogoPNG from '../../../../public/images/chiemsee_gin_logo_farbig.png'
import { useSideCart } from "../../../hooks/useOpenSidebar";

const LogoImage = () => {
  return(
    <Link href="/" passHref>
    <div className="w-16 h-18">
      <Image src={LogoPNG} alt="logo" placeholder="blur" layout="responsive" />
    </div></Link>
  )
}

export const Navbar = ({isHome}) => {

  const [isMounted, setIsMounted] = useState(false);
  /* tslint:disable-next-line */
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let {sideCartOpen} = useSideCart();

  useEffect(()=> {
    if(sideCartOpen == true){
      setScrolledToTop(true)
    }
  }, [sideCartOpen])

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
      <Menu />
      <div className="mx-auto md:ml-0" >

          {isHome ? (<LinkScroll to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href="/" aria-label="home" >
                          <LogoImage className="w-16"/>
                        </a></LinkScroll>) : (
                        <Link href="/" aria-label="home" passHref>
                          <LogoImage className="w-16"/>
                        </Link>
                    )}
        </div>
        <StyledLinks>
          <ol className="text-center">
            {isHome ? (<li><LinkScroll to="premiumgin"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                          <a href="/" aria-label="premiumgin">
                            Premium Gin
                          </a></LinkScroll></li>):
                    (<li><Link href="/">
                     
                      Premium Gin
                    
                    </Link></li>)}
            <li>
              <Link href="/shop/chiemsee-premium-gin"  >
               
                  Shop
                
              </Link>
            </li>
            <li>
              <Link href="/rezepte">
               
                  Chiemgauer Rezepte
                
              </Link>
            </li>
            <li>           
              <Link href="/ueber-uns">
               
              Über Uns
                
              </Link>
            </li> 
          </ol>
          </StyledLinks>
      </StyledNav>
      <SideCart />
    </StyledHeader>

  )
}

