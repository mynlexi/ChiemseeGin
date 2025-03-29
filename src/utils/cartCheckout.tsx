import {client as shopifyClient } from './shopify'
import { ProductStorage } from './cartStorage'
import  Router  from 'next/router'

// currently we are only using one function to handle the case
// this is because update and remove dont work for whatever reason
// so we have to throw out the checkout whenever somebody comes back
// but not the cart
// 

export const addProductsCheckout = (items: ProductStorage[], checkoutId?: string) => {
  let variants = []
  items.map((item)=> {
    let variant = {
      variantId: item.variantId,
      quantity:  item.quantity
      }
      variants.push(variant)
    })
  if (!checkoutId){
    shopifyClient.checkout.create().then((checkout) => {
      shopifyClient.checkout.addLineItems(checkoutId, variants)
      .then((checkout) => {
        console.log('checkout ', checkout)
        window.location.assign(checkout.webUrl);
      })
    })
  } else {

    shopifyClient.checkout.addLineItems(checkoutId, variants)
    .then((checkout) => {
        console.log('checkout ', checkout)
      // window.location.assign(checkout.webUrl);
    })

  }
}


// export const updateProductsCheckout = (items: ProductStorage[], checkoutId) => {
//   let updated = []
  
//   items.map((item) => {
//     updated.push({
//       id: item.productId,
//       quantity: item.quantity
//     })
//   })
//   console.log("updating checkout", updated, checkoutId)
  
//     shopifyClient.checkout.updateLineItems(checkoutId, updated)
//     .then((checkout) => {
//       console.log("checkout", checkout)
      
//     })
// }

// export const removeLineItems = (items: ProductStorage[], checkoutId) => {
//   let variants = []
//   items.map((item)=> {
//     variants.push(item.productId)
//   })
//   console.log(checkoutId, variants)
//   shopifyClient.checkout.removeLineItems(checkoutId, variants)
//   .then((checkout) => {
//     console.log(checkout)
//   })
// }

