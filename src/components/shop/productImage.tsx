import React from 'react'
import { ProductImage, ShopImageContainer } from './StyledElements'
import ImageBlur from "./ImageBlur";

export default function ProductImageBG({imageUrl}) {
  return (
    <ShopImageContainer imageUrl={imageUrl}>
        <ImageBlur src={imageUrl}/>
        <ProductImage src={imageUrl} />
    </ShopImageContainer>
  )
}
