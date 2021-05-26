import React from "react";
import { addProductsCheckout } from "../utils/cartCheckout";

import { getCartStorage, setCartStorage, ProductStorage } from "../utils/cartStorage";
import { getCheckoutInfo, setCheckoutInfo } from "../utils/checkoutInfo";


type CartStorageContextType = {
  cart: Array<ProductStorage> ;
}

type CartStorageUpdateContextType = {
  addCartValue: (value: ProductStorage) => void;
  clearCart: () => void;
  removeCartValue: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setCart: React.Dispatch<React.SetStateAction<ProductStorage[] | null>>;
  updateItemsQuantities: (cartQuantities: number[], checkout: string[], checkoutFlag?: boolean, action?: number, id?: string) => void;

  // handleQtyDecrease: (id: string) => void;
  // handleQtyIncreaseC: (id: string) => void;
  // setCartItemQuantityAndPrize: (id: string, newQuantity: number) => number;
 
}

const CartStorageContext = React.createContext<CartStorageContextType | undefined>(undefined);
const CartStorageUpdateContext = React
  .createContext<CartStorageUpdateContextType | undefined>(undefined);

export const useCartContext = (): CartStorageContextType | undefined => 
  React.useContext(CartStorageContext)

export const useCartUpdateContext = (): CartStorageUpdateContextType | undefined =>
  React.useContext(CartStorageUpdateContext)

const useCart = () => {
  const [cart, setCart] = React.useState(getCartStorage)

  const addCartValue =(value: ProductStorage) => {
    const items = getCartStorage()

    if(!items) {
      setCartStorage([value])
    }
    
    else {
      const isItemDuplicate = items
        .some(item => item.productId === value.productId)
      
      if(!isItemDuplicate){
       
        items.push(value);
        setCartStorage(items)
      
      } else {
        return;
      }
    }
    setCart(items)
   
  }

  const updateItemsQuantities = (quantities: number[], checkout: string[], checkoutFlag?: boolean, action?: number, id?: string) => {
    const items = getCartStorage()!;

    let updatedItems: any = items;
   
    if(items) {
      updatedItems = items.flatMap((item, index) => {
        if (quantities[index] < 1) {
          return [];
        }
        if(id === item.productId){
          quantities[index] += action
       
        }
        return {
          ...item,
          quantity: quantities[index],
          subTotal: quantities[index] * item.price
        }
      })
        
       if(checkoutFlag){
         addProductsCheckout(updatedItems, checkout[0])
       }
       setCart(updatedItems) 
       setCartStorage(updatedItems)
    }
    
    
    
     
  }

  const clearCart = () => {
    setCartStorage([]),
    setCart([])
  
    
  }

  const removeCartValue =(event: React.MouseEvent<HTMLButtonElement>) => {
    const items = getCartStorage()!;

    const productElementId =(event.target as HTMLElement).closest('li')?.id;
    
    const newCart = items?.filter(item => item.productId !== productElementId)

    setCartStorage(newCart)
    setCart(newCart)

  }

  

  return {
    cart,
    setCart,
    addCartValue,
    removeCartValue,
    clearCart,
    updateItemsQuantities,
    
 
  }
}

const CartProvider = ({children}: { children: React.ReactNode}): React.ReactElement => {
  const {
    cart,
    setCart,
    addCartValue,
    removeCartValue,
    clearCart,
    updateItemsQuantities,

  
  } = useCart()

  return (
    <CartStorageContext.Provider value={{cart}}>
      <CartStorageUpdateContext.Provider value={{
            setCart,
            addCartValue,
            removeCartValue,
            clearCart,
            updateItemsQuantities,
            
         

      }}>
        {children}
      </CartStorageUpdateContext.Provider>
    </CartStorageContext.Provider>
  )
}

export default CartProvider