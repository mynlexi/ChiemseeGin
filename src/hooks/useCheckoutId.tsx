import React from 'react'

import { client as shopifyClient } from '../utils/shopify'
import { getCheckoutId, checkoutId, setCheckoutId } from '../utils/checkoutId'

type CheckoutContextType = {
  cartCheckoutId: checkoutId
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
  const [ cartCheckoutId, setCartCheckoutId] = React.useState(getCheckoutId())


  
  const addId = () =>{
    console.log("adding")
    if (cartCheckoutId === null || cartCheckoutId.length < 2 ) {
      shopifyClient.checkout.create()
        .then((checkout) => {
          setCheckoutId(checkout.id)
          setCartCheckoutId(getCheckoutId)
          console.log("setting should have happend")
          console.log(cartCheckoutId, checkout.id)
        })
    }
  }

  const clearId = () => {
    console.log("clearing")
    setCartCheckoutId("x")
    setCheckoutId("x")
    
  }

  return {
    cartCheckoutId,
    addId,
    clearId
  }
}

const CheckoutIdProvider = ({ children }: {children: React.ReactNode}): React.ReactElement => {
  const { cartCheckoutId,
        addId, 
        clearId
      } = useCartId()

  return (
    <CheckoutContext.Provider value={{cartCheckoutId}}>
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