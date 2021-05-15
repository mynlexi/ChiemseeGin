import {useCheckout, useCheckoutUpdate} from '../../src/hooks/useCheckoutId'
import { useCartContext, useCartUpdateContext } from '../../src/hooks/useCartStorage'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

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
  const {cartCheckoutId, GinId} = useCheckout()
  const {addId, clearId} = useCheckoutUpdate()

  const updateCartStatus=() =>{
    addCartValue({
      productId: GinId,
      image:"",
      title: "schexis Gin",
      price: 5,

    })
  }

  const productId = GinId
  return(
    <div>
      <Link href="/" ><a className="bg-green-400">
        home
      </a>
      </Link>

      <div className="ml-40">
            <h3 >cart testing</h3>
           {cart.map((product)=> {
            return(<p>{product.title}</p>)
           })}
          </div>

    <button onClick={updateCartStatus} 
    className="bg-purple-400">
      {cart?.some(item => item.productId === productId) ? "In Cart" : "+ Add To Cart"}
    </button>

    <button  onClick={clearCart}
    className="bg-purple-400">
      clear cart
    </button>

   
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  let x = "x"
  return {
    props: {
      productId: x
    }
  }
}

export default ProductTest