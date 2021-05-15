
 export type checkoutId = string 



export const setCheckoutId = (id: checkoutId): void => {
  console.log("setting")
  window.localStorage.setItem("CheckoutId", JSON.stringify(id));
}

export const getCheckoutId = (): checkoutId  => {

  if (typeof window === "undefined") {
    return null;
  }

  const storedId = window.localStorage.getItem("CheckoutId");
  console.log("storedId locally", storedId)
  return storedId ? JSON.parse(storedId) : null;
}

