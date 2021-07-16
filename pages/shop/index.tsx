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
      <Head>
      
      <title>Chiemsee Premium Gin</title>
      <meta name="title" content="Chiemsee Premium Gin"/>
      <meta name="description" content="Chiemsee Gin ist der Premium Gin vom Bayerischen Meer. Gin aus Bayern so einzigartig wie seine Heimat - nach Chiemgauer Brenntradition seit 1892." />


      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.chiemseegin.de/"/>
      <meta property="og:title" content="Chiemsee Premium Gin"/>
      <meta property="og:description" content="Chiemsee Gin ist der Premium Gin vom Bayerischen Meer. Gin aus Bayern so einzigartig wie seine Heimat - nach Chiemgauer Brenntradition seit 1892." />
      <meta property="og:image" content=""/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://www.chiemseegin.de/"/>
      <meta property="twitter:title" content="Chiemsee Premium Gin"/>
      <meta property="twitter:description" content="Chiemsee Gin ist der Premium Gin vom Bayerischen Meer. Gin aus Bayern so einzigartig wie seine Heimat - nach Chiemgauer Brenntradition seit 1892." />
      <meta property="twitter:image" content=""/>

    </Head>
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
