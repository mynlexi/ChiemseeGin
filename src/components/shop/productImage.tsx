import React from 'react'
import { ProductImage, ShopImageContainer } from './StyledElements'

export default function ProductImageBG({imageUrl}) {
  return (
    <ShopImageContainer imageUrl={imageUrl}>
        <ProductImage src={imageUrl} />
    </ShopImageContainer>
  )
}
