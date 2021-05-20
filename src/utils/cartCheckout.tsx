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


export const updateProductsCheckout = (items: ProductStorage[], checkoutId) => {
  let updated = []
  console.log("updating checkout")
  items.map((item) => {
    updated.push({
      id: item.productId,
      quantity: item.quantity
    })
})
    shopifyClient.checkout.updateLineItems(checkoutId, updated)
    .then((checkout) => {
      console.log("checkout", checkout)
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

