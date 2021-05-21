import {useCheckout, useCheckoutUpdate} from '../../src/hooks/useCheckoutId'
import { useCartContext, useCartUpdateContext } from '../../src/hooks/useCartStorage'
import { GetStaticProps, NextPage } from 'next'
import { addProductsCheckout } from '../../src/utils/cartCheckout'
import React from 'react'
import Link from 'next/link'
import { client as shopifyClient } from '../../src/utils/shopify'
import { ProductGinId } from '../../src/apollo_files/queries/products'
import Router from "next/router";

const GinId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MjI0NTk1NjAxMTU="

const ProductTest: NextPage<any> = ({props}) => {
  let k = props
  let {cart} = useCartContext()
  if (cart === null) {
      cart = []
  }
  const {addCartValue,
        clearCart,
        removeCartValue,
        setCart,
        updateItemsQuantities } = useCartUpdateContext()
  
  const {cartCheckoutInfo, GinId} = useCheckout()
  const {addId, clearId} = useCheckoutUpdate()

  const updateCartStatus=() =>{
    addCartValue({
      productId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MjI0NTk1NjAxMTU=",
      variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTU5MDgzMzYxOTEyMw==",
      image:"",
      title: "schexis Gin",
      price: 5,
      quantity: 1
    })
  }
 
  
  // const updateCheckout =() => {
  //   addProductsCheckout(cart, cartCheckoutInfo[0])
  // }
  
  const checkout = () => {
        Router.replace(cartCheckoutInfo[1]);
  };

  const clearBoth =() => {
    clearCart()
    clearId()
  }



 
  const productId = GinId
  return(
    <div>
      

      <div className="ml-40">
            <h3 >cart testing</h3>
           {cart.map((product)=> {
            return(
              <div key={product.productId}>
                
              <p>{product.title}
              </p>
              
              <div>
              
                <input
                name={product.productId}
                placeholder={`${product.quantity}`}
                min="0"
                max="5000"
                step="1"
                type="number"
             
                  className="bg-green-200"/>
                
               
              </div>
              <p>{product.quantity}</p>
              <li id={product.productId}>id
                <button onClick={removeCartValue} className="bg-blue-600">
                  remove this product
                </button></li>

                <p>{product.price * product.quantity}</p>
            </div>
            )
           })}
          </div>

    <button onClick={updateCartStatus} 
    className="bg-purple-400">
      {cart?.some(item => item.productId === productId) ? "In Cart" : "Add To Cart"}
    </button>

    <button  onClick={clearBoth}
    className="bg-purple-400">
      clear cart
    </button>
    <br/>
    <br/>
    {/* <button  onClick={updateCheckout}
    className="bg-purple-400">
      update checkout
    </button>  */}
    <br />
    <p>{cartCheckoutInfo && cartCheckoutInfo[1]}</p>
    <button className="bg-indigo-500" onClick={checkout}>
           go to checkout
    </button>
   
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  let x = ""
  shopifyClient.product.fetch(GinId).then((product)=> {
     x = product.id
    let parse = JSON.stringify(product)
     
  })
  x = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTU5MDgzMzYxOTEyMw=="
  return {
    props: {
      productId: x
    }
  }
}

export default ProductTest