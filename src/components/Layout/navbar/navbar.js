import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Menu from '../sideMenu'
import SideCart from '../../cart'
import { useScrollDirection } from '../../../hooks'
import { StyledHeader, StyledLinks, StyledNav } from './NavbarElements'

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


  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
      <Menu />
      <div className="logo" >

          {isHome ? ( <LinkScroll to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'>
                        <a href="/" aria-label="home">
                          LOGO HERE
                        </a></LinkScroll>
                        
                    ) : (
                    <Link href="/" aria-label="home">
                      <a>
                        LOGO HERE
                      </a>
                    </Link>
          )}
        </div>
        <StyledLinks>
          <ol>
            {isHome ? (<li><LinkScroll to="premiumgin"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                          <a href="/" aria-label="premiumgin">
                            Unser Premium Gin
                          </a></LinkScroll></li>):
                    (<li><Link href="/">
                      <a>
                        Home
                      </a>
                    </Link></li>)}
            <li>
              <Link href="/shop"  >
                <a>
                  Shop
                </a>
              </Link>
            </li>
            <li>
              <Link href="/rezepte">
                <a>
                  Rezepte
                </a>
              </Link>
            </li>
            <li>
              <Link href="/chiemsee">
                <a >
                  Chiemsee
                </a>
              </Link>
            </li>
            <li>           
              <Link href="/geschichte">
                <a >
                  Team
                </a>
              </Link>
            </li> 
          </ol>
          </StyledLinks>
      </StyledNav>
      <SideCart />
    </StyledHeader>

  )
}

