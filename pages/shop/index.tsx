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
import Header from '../../src/components/general/header';





export default function ProductsMain({collections}) {
    console.log(collections)

  const header = {
    path: '/images/backgroundheader.jpg',
    title: 'Unser Shop',
   
  }

  
 
  let {cart} = useCartContext()
  if (cart === null) {
      cart = []
  }
  return (
    <div className="min-h-screen">
      <Head>
        <title>Premium Gins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
    
      {/* <section id="main-shop"> 
      
          <ShopMain collections={collections}/>
     
      </section> */}

    </div>
  )
}


export async function getServerSideProps() {

  // const products = await shopifyClient.product.fetchAll()
  const collections = await shopifyClient.product.fetchAll()

  
  
 
  
  return { props: { collections: JSON.parse(JSON.stringify(collections))  } }

}
