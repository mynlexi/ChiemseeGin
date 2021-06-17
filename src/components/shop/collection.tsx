import React from 'react'
import Product from './produkt'
import ShopProduct from './shopProduct'

export default function Collection({collection, active}) {
  if(active === collection.title) {
    return (
    <div>
      {collection.products.map((product)=> {
        return(
        <ShopProduct product={product} key={`product ${product.handle}`} />
        )
      })}
    </div>
  )
  } else {
    return (<></>)
  }
  
}
