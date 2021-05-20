import React, { useState, useEffect, useRef } from "react";
import { ShoppingBag } from "react-feather";

import {
  StyledMenu,
  StyledHamburgerButton,
  StyledSidebar,
} from "./SideCartElements";
// import { navLinks } from '../../config';
import { KEY_CODES } from "../../utils/keyCodes";
import { useOnClickOutside } from "../../hooks";
import { useCheckout } from "../../hooks/useCheckoutId";
import {
  useCartContext,
  useCartUpdateContext,
} from "../../hooks/useCartStorage";
import CartItem from './cartItem'
import useCalculateTotal from "../../hooks/useCalculateCart";



const SideCart = () => {
  const { cartCheckoutInfo, GinId } = useCheckout();
  let { cart } = useCartContext();
  if (cart === null) {
    cart = [];
  }

  

  const [sideCartOpen, setSideCartOpen] = useState(false);

  const toggleSideCart = () => setSideCartOpen(!sideCartOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const setFocusables = () => {
    // have to adjust this probably
    menuFocusables = [
      buttonRef.current,
      ...Array.from(navRef.current.querySelectorAll("a")),
    ];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = (e) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setSideCartOpen(false);
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

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setSideCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    setFocusables();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setSideCartOpen(false));

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <StyledHamburgerButton
          onClick={toggleSideCart}
          sideCartOpen={sideCartOpen}
          ref={buttonRef}
        >
          <ShoppingBag
            color={`${sideCartOpen ? "var(--green)" : "var(--slate)"}`}
          />
        </StyledHamburgerButton>

        <StyledSidebar
          sideCartOpen={sideCartOpen}
          aria-hidden={!sideCartOpen}
          tabIndex={sideCartOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            {cart.map((product) => {
            
              return (
                  <CartItem 
                    quantity={product.quantity}
                    id={product.productId}
                    title={product.title}
                    price={product.price}
                    
                  
                  />
              );
            })}
            <ol>
            <a href="" className="hidden">
              Go to Checkout
            </a></ol>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default SideCart;
