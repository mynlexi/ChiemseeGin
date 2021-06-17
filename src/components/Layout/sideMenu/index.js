
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link'
import {StyledMenu, StyledHamburgerButton, StyledSidebar, } from './SidebarElements'
// import { navLinks } from '../../config';
import { KEY_CODES } from '../../../utils/keyCodes';
import { useOnClickOutside } from '../../../hooks';
import Logo from '../../../../public/chiemsee_gin_logo.svg'

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = e => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = e => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <StyledMenu>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef} className="sideMenu">
        <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef}>
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            {/* {navLinks && ( */}
              <ol>
                {/* {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                  
                    <LinkScroll
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true' to={url}><a>
                      {name}</a>
                    </LinkScroll>
                  </li>
                ))} */}
                <li >
                  <Link href="/">
               
                    <a onClick={toggleMenu} >
                      <div className="w-32 mx-auto">
                      <Logo />
                      </div>
                    </a>
               
                  </Link>
                </li>
               
                <li >
                  <Link href="/shop/chiemsee-premium-gin"  >
                    <a onClick={toggleMenu}>
                      Shop
                    </a>
                  </Link>
                </li>
             
                <li >
                  <Link href="/rezepte">
                    <a  onClick={toggleMenu}>
                      Chiemgauer Rezepte
                    </a>
                  </Link>
                </li>
                <li >
                  <Link href="/chiemsee">
                    <a  onClick={toggleMenu}>
                      Chiemsee
                    </a>
                  </Link>
                </li>
                <li >
                  <Link href="/geschichte">
                    <a  onClick={toggleMenu}>
                      Geschichte
                    </a>
                  </Link>
                </li>
              </ol>
            {/* )} */}

          
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Menu;



// import React from 'react'
// import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

// const Sidebar = ({ isOpen, toggle }) => {
//   return (
//     <SidebarContainer isOpen={isOpen} onClick={toggle} >
//       <Icon onClick={toggle}>
//         <CloseIcon />
//       </Icon>
//       <SidebarWrapper>
//         <SidebarMenu>
//           <SidebarLink to="about"  onClick={toggle}>
//             About
//           </SidebarLink>
//           <SidebarLink to="projects"  onClick={toggle}>
//             Projects
//           </SidebarLink>
//           <SidebarLink to="contact"  onClick={toggle}>
//             Contact
//           </SidebarLink>
//         </SidebarMenu>
//         <SideBtnWrap>
//           <SidebarRoute to="/resume" >
//             Resume
//           </SidebarRoute>
//         </SideBtnWrap>
//       </SidebarWrapper>

//     </SidebarContainer>

//   )
   
// }

// export default Sidebar
