import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useQuery, gql } from '@apollo/client';
import  {ALL_RECIPES, RECIPE_INFO, RECIPE_TITLES} from '../../src/apollo_files/queries/recipes';
import { initApollo } from '../../src/apollo_files/apolloClient';
import {client as shopifyClient} from '../../src/utils/shopify'
import { useCartContext, useCartUpdateContext } from '../../src/hooks/useCartStorage';
import { useSideCartUpdate } from '../../src/hooks/useOpenSidebar';
import React from 'react';
import ShopMain from '../../src/components/shop/shopMain';





export default function ProductsMain({collections}) {

  console.log(collections)
  const gins = collections[0]
  const accessoires = collections[1]

  let {cart} = useCartContext()
  if (cart === null) {
      cart = []
  }
  return (
    <div className="{styles.container}">
      <Head>
        <title>Premium Gins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="hero-shop" className="w-full h-1/3">
          picture
        </section>
      <section id="main-shop"> 
        <div className="m-0">
     
         
          </div>
          <ShopMain collections={collections}/>
     
      </section>

    </div>
  )
}


export async function getServerSideProps() {

  // const products = await shopifyClient.product.fetchAll()
  const collections = await shopifyClient.collection.fetchAllWithProducts()
  
  
  
 
  
  return { props: { collections: JSON.parse(JSON.stringify(collections))  } }

}
