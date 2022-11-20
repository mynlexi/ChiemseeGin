import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router";
import Image from 'next/image'
import {client as shopifyClient} from '../../src/utils/shopify'
import { useCartContext, useCartUpdateContext } from "../../src/hooks/useCartStorage";
import { useSideCartUpdate } from "../../src/hooks/useOpenSidebar";
import React from "react";
import Product from '../../src/components/shop/produkt'

 const ProductPage: NextPage<any> = ({product}) => {
   return (
     <Product product={product} sorte={"original"}/>

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

 export default ProductPage