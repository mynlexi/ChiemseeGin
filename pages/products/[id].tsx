import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router";
import Image from 'next/image'
import {client as shopifyClient} from '../../src/utils/shopify'
import { useCartContext, useCartUpdateContext } from "../../src/hooks/useCartStorage";

const Product: NextPage<any> = ({product}) => {
  let {cart} = useCartContext()
  if (cart === null) {
      cart = []
  }

  const {
    id = product.Id,
    title = product.title,
    imageUrl = product.images[0].src,
    variantId = product.variants[0].id,
    price = parseInt(product.variants[0].price),
    description = product.description,
    quantity = 1
  } = product

  const {addCartValue} = useCartUpdateContext()

  const addProduct = () => {
    addCartValue({
      productId: id,
      variantId: variantId,
      image: imageUrl,
      title: title,
      price: price,
      quantity: quantity
    })
  }

  return (
    <div key={id}>
   <p>{title}</p>
   <p>{description}</p>
      <img src={imageUrl} style={{height: "100px"}} className="mx-auto mt-10" />
   <button onClick={addProduct} 
    className="bg-purple-900">
      {cart?.some(item => item.productId === id) ? "In Cart" : "Add To Cart"}
    </button>
   </div>

    ) 

}


export const getStaticPaths: GetStaticPaths = async () => {

  const handles = await shopifyClient.product.fetchAll()


  const paths = handles.map((product) => ({
    params: { id: product.handle}
  }))

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps: GetStaticProps = async ({params}) => {
  let id= ""
  if (typeof params?.id === "string"){
    id = params?.id
  }
  const product = await shopifyClient.product.fetchByHandle(id)

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }, 
    revalidate: 1
  }
  
  
}

export default Product