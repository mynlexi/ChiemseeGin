import { GetServerSideProps, NextPage } from "next"

import {client as shopifyClient} from '../../src/utils/shopify'

import React from "react";
import Product from '../../src/components/shop/produkt'

import { IngList } from "../../styles/utilstyled";
import Helmet from 'react-helmet'

const ProductPage: NextPage<any> = ({product}) => {
  return (
    <div>
      <Helmet>
        <title>Chiemsee Premium Gin</title>
        
        <meta name="description" content="" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="" />
          <meta name="og:description" property="og:description" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:url" content="" />  
          <meta name="twitter:card" content="summary" /> 
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content="" />
          <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
          <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
          <meta property="og:image" content="" />  
          <meta name="twitter:image" content="" />   
       
      
      </Helmet>
    <Product product={product}/>

    <div>
      <div className="w-full border-b border-cgblue font-bold ml-17 flex">
        <div className="ml-14 border-b-2 border-cgblue">
          <h3 className=" mb-2">Beschreibung</h3>
        </div>
      </div>

      <section className="flex flex-col space-y-6 mt-12">
          <div className="flex flex-col space-y-6 ">
          <p>Chiemsee Gin ist der Premium Gin vom bayerischen Meer. Unser Wacholderschnaps wird in der seit 1829 bestehenden Edelbrandmanufaktur Guggenbichler in traditioneller Handarbeit destilliert. Alle Zutaten für unseren Gin werden mit größter Sorgfalt und mit Blick auf Nachhaltigkeit handverlesen. Ein außergewöhnlicher und facettenreicher Gin von und für seine bayerische Heimat und die Menschen, die diese so sehr lieben.</p>

          <p>Handverlesene Kräuter, kristallklares Gebirgsquellwasser und über 5 Generationen überlieferte Destillationskunst der Edelbrandmanufaktur Guggenbichler in Frasdorf am Chiemsee ergeben einen bayerischen Premium Gin der Extraklasse. Mit viel Liebe und Herzblut wird Chiemsee Gin in kleinen exklusiven Chargen hergestellt. Qualität steht für uns an erster Stelle.</p>
          <p>Mit jeder verkauften Flasche spenden wir 1 € für den chiemgauer Naturschutz und unterstützen somit die Erhaltung unserer einzigartigen Heimat.</p>
          </div>

          <div>
            <IngList>
              <li>
              Alkohol: 45% VOL
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
  
  const product = await shopifyClient.product.fetchByHandle('chiemsee-gin')
  
  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }, 
  }
  
  
}

export default ProductPage