import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Menu from '../sideMenu'
import SideCart from '../../cart'
import { useScrollDirection } from '../../../hooks'
import { StyledHeader, StyledLinks, StyledNav } from './NavbarElements'
import Logo from '../../../../public/chiemsee_gin_logo.svg'
import { useSideCart } from "../../../hooks/useOpenSidebar";

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
                          <Logo className="w-16"/>
                        </a></LinkScroll>) : (<Link href="/" aria-label="home" passHref>
                        <Logo className="w-16"/>
                    </Link>)}
        </div>
        <StyledLinks>
          <ol>
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
              <Link href="/chiemsee">
                
                  Chiemsee
               
              </Link>
            </li>
            <li>           
              <Link href="/geschichte">
               
                  Geschichte
                
              </Link>
            </li> 
          </ol>
          </StyledLinks>
      </StyledNav>
      <SideCart />
    </StyledHeader>

  )
}

