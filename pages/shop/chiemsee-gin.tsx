import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router";
import Image from 'next/image'
import {client as shopifyClient} from '../../src/utils/shopify'
import { useCartContext, useCartUpdateContext } from "../../src/hooks/useCartStorage";
import { useSideCartUpdate } from "../../src/hooks/useOpenSidebar";
import React from "react";
import Product from '../../src/components/shop/produkt'
import Head from "next/head";
import { IngList } from "../../styles/utilstyled";

const ProductPage: NextPage<any> = ({product}) => {
  return (
    <div>
      <Head>
        <title>Premium Gins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Product product={product}/>

    <div>
      <div className="w-full border-b border-gray-700 font-bold ml-17 flex">
        <div className="ml-14 border-b-2 border-gray-900">
          <p className=" mb-2">Beschreibung</p>
        </div>
      </div>

      <section className="flex flex-col space-y-6 mt-12">
          <div className="flex flex-col space-y-6 ">
          <p>Chiemsee Premium Gin wird nach alter Brenntradition von XXXX hergestellt. Und das in Zusammenarbeit mit der <a href="https://www.edelbrandmanufaktur.com/" className="font-semibold">Guggenbichler Edelbrandmanufactur</a>.</p>

          <p>Die handverlesenen Kräuter, das kristallklare Gebirgsquellwasser und eine über Generationen überlieferte Destillateurs-Kunst ergeben einen erlesenen und reinen Premium Dry Gin, bei dem man den Unterschied wirklich schmeckt! Dieser bayerische Gin der Extraklasse in der 0,5L Flache wird von uns mit viel Liebe und von Hand in kleinen exklusiven Chargen destilliert und abgefüllt.</p>

          </div>

          <div>
            <IngList>
              <li>
              Alkohol: 42% VOL
              </li>
              <li>
              Füllmenge: 0,5L Flasche
              </li>
            </IngList>
          </div>

      </section>
    </div>
    </div>
  )
}




export const getServerSideProps: GetServerSideProps = async () => {
  
  const product = await shopifyClient.product.fetchByHandle('schexis-gin')

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }, 
  }
  
  
}

export default ProductPage