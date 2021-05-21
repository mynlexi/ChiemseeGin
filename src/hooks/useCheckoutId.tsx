import React, { useState } from 'react'

import { client as shopifyClient } from '../utils/shopify'
import { getCheckoutInfo, checkoutId, setCheckoutInfo } from '../utils/checkoutInfo'

type CheckoutContextType = {
  cartCheckoutInfo: checkoutId | null
  GinId: string
}

type CheckoutUpdateContextType ={
  clearId: () => void
  addId: () => void
}

const CheckoutContext = React.createContext<CheckoutContextType | undefined>(undefined)
const CheckoutDispatchContext = React.createContext<CheckoutUpdateContextType| undefined>(undefined)

export const useCheckout = (): CheckoutContextType | undefined => React.useContext(CheckoutContext)
export const useCheckoutUpdate = (): CheckoutUpdateContextType | undefined => React.useContext(CheckoutDispatchContext)

const useCartId = () => {
  // only thing that doesnt work is that the Id is set correctly
  const [ cartCheckoutInfo, setCartCheckoutInfo] = React.useState(getCheckoutInfo())
 
  const GinId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MjI0NTk1NjAxMTU="
  
  const addId = (force?: boolean) =>{
    console.log("adding")
    if (cartCheckoutInfo === null || cartCheckoutInfo.length < 2 || force ) {
      shopifyClient.checkout.create()
        .then((checkout) => {
          setCheckoutInfo([checkout.id, checkout.webUrl])
          setCartCheckoutInfo([checkout.id, checkout.webUrl])
          console.log(checkout)
        })
    }
  }

  const clearId = () => {
    console.log("clearing")
    setCartCheckoutInfo([])
    setCheckoutInfo([])
    console.log("setting timeout")
    setTimeout(()=> {
      console.log("waiting")
      addId(true)
    }, 1000)
    
    
  }

  return {
    cartCheckoutInfo,
    GinId,
    addId,
    clearId
  }
}

const CheckoutIdProvider = ({ children }: {children: React.ReactNode}): React.ReactElement => {
  const { 
        cartCheckoutInfo,
        GinId, 
        addId, 
        clearId
      } = useCartId()

  return (
    <CheckoutContext.Provider value={{cartCheckoutInfo, GinId}}>
      <CheckoutDispatchContext.Provider value={{
        addId,
        clearId
      }}>
        {children}

      </CheckoutDispatchContext.Provider>
    </CheckoutContext.Provider>

  )
  
}

export default CheckoutIdProvider