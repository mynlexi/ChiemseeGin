import {client as shopifyClient } from './shopify'
import { ProductStorage } from './cartStorage'


export const addProductsCheckout = (items: ProductStorage[], checkoutId) => {
  let variants = []
  items.map((item)=> {
    let variant = {
      variantId: item.productId,
      quantity:  1
      }
      variants.push(variant)
    })

  shopifyClient.checkout.addLineItems(checkoutId, variants)
    .then((checkout) => {
      console.log(checkout)
    })
}


export const updateProductsCheckout = (item: ProductStorage, checkoutId) => {
    shopifyClient.checkout.updateLineItems(checkoutId, [{
      id: item.productId,
      quantity: item.quantity
    }])
    .then((checkout) => {
      console.log(checkout)
    })
}

export const removeLineItems = (items: ProductStorage[], checkoutId) => {
  let variants = []
  items.map((item)=> {
    variants.push(item.productId)
  })
  console.log(checkoutId, variants)
  shopifyClient.checkout.removeLineItems(checkoutId, variants)
  .then((checkout) => {
    console.log(checkout)
  })
}

