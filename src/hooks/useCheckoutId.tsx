import React from 'react'

import { client as shopifyClient } from '../utils/shopify'
import { getCheckoutId, checkoutId, setCheckoutId } from '../utils/checkoutId'

type CheckoutContextType = {
  cartCheckoutId: checkoutId
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
  const [ cartCheckoutId, setCartCheckoutId] = React.useState(getCheckoutId())

  const GinId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MjI0NTk1NjAxMTU="
  
  const addId = () =>{
    console.log("adding")
    if (cartCheckoutId === null || cartCheckoutId.length < 2 ) {
      shopifyClient.checkout.create()
        .then((checkout) => {
          setCheckoutId(checkout.id)
          setCartCheckoutId(getCheckoutId)
          console.log(checkout)
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
    GinId,
    addId,
    clearId
  }
}

const CheckoutIdProvider = ({ children }: {children: React.ReactNode}): React.ReactElement => {
  const { cartCheckoutId,
        GinId, 
        addId, 
        clearId
      } = useCartId()

  return (
    <CheckoutContext.Provider value={{cartCheckoutId, GinId}}>
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