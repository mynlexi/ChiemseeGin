export interface ProductStorage {
  productId: string,
  image: string,
  title: string,
  price: number,
  quantity: number
}

export const setCartStorage = (value: Array<ProductStorage>): void => {

  if (typeof window === "undefined"){
   
    return null
  }
  window.localStorage.setItem("cart", JSON.stringify(value));
}

export const getCartStorage = (): Array<ProductStorage> | null => {
  console.log("incoming")
  if (typeof window === "undefined") {
    console.log("undefined")
    return null;
  }

  const storedItems = window.localStorage.getItem("cart")
  console.log("stored")
  return storedItems ? JSON.parse(storedItems): [];
}
