import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "react-feather";
import Image from 'next/image'
import {client as shopifyClient} from '../../../src/utils/shopify'

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
import src from '../../../public/images/bild_sina_scan_600dpi_dunkel.png'
import { UpsellItem } from "./upsellItem";

const SideCart = () => {


  const {clearId} = useCheckoutUpdate()
  const { cartCheckoutInfo } = useCheckout();
  let { cart } = useCartContext();
  if (cart === null) {
    cart = [];
  }
 

  const { updateItemsQuantities } = useCartUpdateContext()!;
  const { updateTotal } = useCalculateTotal();
 
  const [total, setTotal] = React.useState(updateTotal)
  const [ isDisabled, setIsDisabled ] = React.useState(false);


  /// getting upsell info through async useEffect
  const [upsellData, setUpsellData] = React.useState(null)
  const [showUpsell, setShowUpsell] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)

  React.useEffect(()=>{
    async function getUpsell(product_handle){
     const upsell = await shopifyClient.product.fetchByHandle(product_handle)
      setUpsellData(JSON.parse(JSON.stringify(upsell)))
    }

    if(upsellData == null){
      getUpsell('gin-kuhlsteine')
    }

  }, [upsellData])
  React.useEffect(()=>{
    if(total > 50 && !showUpsell && !disabled){
        setShowUpsell(true)
    } else if (total < 50 && showUpsell){
      setShowUpsell(false)
    }
  }, [total])
  const handleDisable =()=> {
    setDisabled(true)
    setShowUpsell(false)
    console.log("handledisable")
  }



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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <ShoppingCart color={cart.length ?  "var(--blue)": "var(--slate)"}
            
          />
        </StyledHamburgerButton>

        <StyledSidebar
          sideCartOpen={sideCartOpen}
          aria-hidden={!sideCartOpen}
          tabIndex={sideCartOpen ? 1 : -1}
       
        >
         
          <nav ref={navRef} className="hidden h-full"> 
          <div className="fixed top-0 my-10 border-b-2 border-cgblue w-full">
            <button onClick={toggleSideCart}>
             <h1>Dein Warenkorb</h1>
             </button>
          </div>

            <div className="middlecart" >
              <>
            {cart.map((product) => {
            
              return (
                  <CartItem
                    key={`cart ${product.productId}`}
                    quantity={product.quantity}
                    id={product.productId}
                    updateQhandle={handleQuantity}
                    handleTotal={handleTotal}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                   
                  />
              );
            })}</>

                <UpsellItem key={1}  product={upsellData} displayed={showUpsell} handleDisable={handleDisable}/>

            </div>





            {isDisabled ?
            <div className=" flex flex-col">
            <div className="text-cgblue mb-20"> Noch nichts zum Einkaufswagen hinzugefügt</div>
              <div className="w-full ">
              <Image src={src} layout="responsive" alt="sina's zeichung vom Chiemsee" placeholder="blur"/>
              </div>
            </div>
             :
            <div className="fixed bottom-0 w-full lowercart">
            <div className="border-b-2 border-cgblue w-full text-left text-2xl p-5 text-cgblue">
              <h3>Zwischensumme</h3>
              <div
                id="cart-total"
                  >
                       {total.toFixed(2)} €
              </div>
            </div>
            <div className="w-full flex justify-items-center align-middle " onClick={checkout}>
              <button className=" my-5 transition-colors bg-cgblue text-white px-20 hover:bg-white hover:text-cgblue py-4 m-auto "  >
         
                Checkout
              </button>
              </div>
            </div>
            }

          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default SideCart;
