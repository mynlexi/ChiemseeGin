export interface ProductStorage {
  productId: string,
  variantId: string,
  image: string,
  title: string,
  price: number,
  quantity: number
  subTotal: number
}

export const setCartStorage = (value: Array<ProductStorage>): void => {

  if (typeof window === "undefined"){
   
    return null
  }
  window.localStorage.setItem("cart", JSON.stringify(value));
}

export const getCartStorage = (): Array<ProductStorage> | null => {

  if (typeof window === "undefined") {
    return null;
  }

  const storedItems = window.localStorage.getItem("cart")

  return storedItems ? JSON.parse(storedItems): [];
}
