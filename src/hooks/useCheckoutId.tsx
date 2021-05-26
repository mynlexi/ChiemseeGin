import React, { useState } from 'react'

import { client as shopifyClient } from '../utils/shopify'
import { getCheckoutInfo, checkoutId, setCheckoutInfo } from '../utils/checkoutInfo'
import { ProductStorage } from '../utils/cartStorage'

type CheckoutContextType = {
  cartCheckoutInfo: checkoutId | null

}

type CheckoutUpdateContextType ={
  clearId: () => void
  addId: () => void
  updateTotalPrice: (cart: ProductStorage[]) => void
}

const CheckoutContext = React.createContext<CheckoutContextType | undefined>(undefined)
const CheckoutDispatchContext = React.createContext<CheckoutUpdateContextType| undefined>(undefined)

export const useCheckout = (): CheckoutContextType | undefined => React.useContext(CheckoutContext)
export const useCheckoutUpdate = (): CheckoutUpdateContextType | undefined => React.useContext(CheckoutDispatchContext)

const useCartId = () => {
  // only thing that doesnt work is that the Id is set correctly
  const [ cartCheckoutInfo, setCartCheckoutInfo] = React.useState(getCheckoutInfo())
 

  
  const addId = (force?: boolean) =>{

    if (cartCheckoutInfo === null || cartCheckoutInfo.length < 2 || force ) {
      shopifyClient.checkout.create()
        .then((checkout) => {
          setCheckoutInfo([checkout.id, checkout.webUrl, 0])
          setCartCheckoutInfo([checkout.id, checkout.webUrl, 0])
        })
    }
  }

  const clearId = () => {
  
    setCartCheckoutInfo([])
    setCheckoutInfo([])
  
    setTimeout(()=> {
  
      addId(true)
    }, 1000)
    
  }

  const updateTotalPrice = (cart: ProductStorage[]) => {
    let totalPrice = cart.reduce((acc, val)=>{
      let product = val.price * val.quantity

      return product + acc
    }, 0).toString()
    cartCheckoutInfo.push(totalPrice)

    setCheckoutInfo(cartCheckoutInfo)
    setCartCheckoutInfo(cartCheckoutInfo)
    
  }

  return {
    cartCheckoutInfo,
    addId,
    clearId,
    updateTotalPrice
  }
}

const CheckoutIdProvider = ({ children }: {children: React.ReactNode}): React.ReactElement => {
  const { 
        cartCheckoutInfo,
        addId, 
        clearId,
        updateTotalPrice
      } = useCartId()

  return (
    <CheckoutContext.Provider value={{cartCheckoutInfo}}>
      <CheckoutDispatchContext.Provider value={{
        addId,
        clearId,
        updateTotalPrice
      }}>
        {children}

      </CheckoutDispatchContext.Provider>
    </CheckoutContext.Provider>

  )
  
}

export default CheckoutIdProvider