 export type checkoutId = string[]
 


export const setCheckoutInfo = (info: checkoutId): void => {
  
  window.localStorage.setItem("Checkout", JSON.stringify(info));
}

export const getCheckoutInfo = (): checkoutId  => {

  if (typeof window === "undefined") {
    return null;
  }

  const storedId = window.localStorage.getItem("Checkout");
 
  return storedId ? JSON.parse(storedId) : null;
}

