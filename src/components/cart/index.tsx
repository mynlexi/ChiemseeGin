import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "react-feather";

import {
  StyledMenu,
  StyledHamburgerButton,
  StyledSidebar,
} from "./SideCartElements";
// import { navLinks } from '../../config';
import { KEY_CODES } from "../../utils/keyCodes";
import { useOnClickOutside } from "../../hooks";
import { useCheckout, useCheckoutUpdate } from "../../hooks/useCheckoutId";
import {
  useCartContext,
  useCartUpdateContext,
} from "../../hooks/useCartStorage";
import CartItem from './cartItem'
import useCalculateTotal from "../../hooks/useCalculateCart";
import { useSideCart, useSideCartUpdate } from "../../hooks/useOpenSidebar";



const SideCart = () => {
  const {clearId} = useCheckoutUpdate()
  const { cartCheckoutInfo } = useCheckout();
  let { cart } = useCartContext();
  if (cart === null) {
    cart = [];
  }
 

  const { updateItemsQuantities } = useCartUpdateContext()!;
  const { handleTotalCalculation, updateTotal } = useCalculateTotal();
 
  const [total, setTotal] = React.useState(updateTotal)
  const [ isDisabled, setIsDisabled ] = React.useState(false);



  const handleQuantity = (action: number, id: string) => {
  
    const quantitiyElements: HTMLInputElement[] = Array.from(document.querySelectorAll(".item-qty"));
    const cartQuantities = quantitiyElements.map((input) => parseInt(input.value));
    
    updateItemsQuantities(cartQuantities, cartCheckoutInfo, false, action, id);  
    
    setTotal(updateTotal)
  };

  const handleTotal = () => {
    setTotal(updateTotal)
  }
  


  const handleCheckoutProceed = () => {
    const quantitiyElements: HTMLInputElement[] = Array.from(document.querySelectorAll(".item-qty"));
    const cartQuantities = quantitiyElements.map((input) => parseInt(input.value));
    updateItemsQuantities(cartQuantities, cartCheckoutInfo, true);   
  };
  
  const checkout = () => {
    handleCheckoutProceed()
    clearId()
  };

  const handleToggleDisable = (value: boolean) => setIsDisabled(value);

  React.useEffect(() => {
      if (total <= 0) {
          handleToggleDisable(true);
      } else {
          handleToggleDisable(false);
      }
  }, [ total ]);

  
  // React.useEffect(() => {
  //   const itemPriceElements = Array.from(document.querySelectorAll(".cart-item__total"));
  

  //   const handleUpdateTotal = (event: MouseEvent) => {
  //       if ((event.target as HTMLButtonElement).classList.contains("qty-change" )
  //       || (event.target as HTMLButtonElement).classList.contains("cart-item--remove")) {
            
  //           handleTotalCalculation(itemPriceElements);
  //           console.log("updating total")
  //       
  //           setTotal(updateTotal)
            
  //        }
        
   
  //   }
    
  //   window.addEventListener("click", handleUpdateTotal);

  //   return () => {
  //     window.removeEventListener("click", handleUpdateTotal);
  //   };
  // }); 

  

  
  //button stuff
  let {sideCartOpen} = useSideCart();
  const {setSideCartOpen, toggleSideCart} = useSideCartUpdate()

  // const toggleSideCart = () => setSideCartOpen(!sideCartOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const setFocusables = () => {
    // have to adjust this probably
    menuFocusables = [
    //   buttonRef.current,
    //   ...Array.from(navRef.current.querySelectorAll("a")),
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
      <div ref={wrapperRef} >
        <StyledHamburgerButton
          onClick={toggleSideCart}
          sideCartOpen={sideCartOpen}
          ref={buttonRef}
          className="highlighter"
        >
          <ShoppingCart color={cart.length ?  "var(--green)": "var(--slate)"}
            
          />
        </StyledHamburgerButton>

        <StyledSidebar
          sideCartOpen={sideCartOpen}
          aria-hidden={!sideCartOpen}
          tabIndex={sideCartOpen ? 1 : -1}
       
        >
         
          <nav ref={navRef} className="hidden"> 
            <h1>Order Summary</h1>
            {cart.map((product) => {
            
              return (
                  <CartItem 
                    quantity={product.quantity}
                    id={product.productId}
                    updateQhandle={handleQuantity}
                    handleTotal={handleTotal}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                   
                  />
              );
            })}
            <ol>
            
  
              <div
              id="cart-total"
                >
                    €{total}
                    </div></ol>
            <button className="bg-indigo-500" onClick={checkout} >
                  {isDisabled ? "add items" : "checkout"}
             </button>
            
         
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default SideCart;
