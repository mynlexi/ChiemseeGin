import { GetServerSideProps, NextPage } from "next"

import {client as shopifyClient} from '../../src/utils/shopify'

import React from "react";
import Product from '../../src/components/shop/produkt'

import { IngList } from "../../styles/utilstyled";
import Helmet from 'react-helmet'
import Head from "next/head";

const ProductPage: NextPage<any> = ({product, productPackage}) => {

  const productMultiple = productPackage
  const [multiple, setMultiple] = React.useState(false)

  const dynamicImage = product.images[0].src

  return (
    <div>
      <Head>
      
        <title>Chiemsee Premium Gin</title>
        <meta name="title" content="Chiemsee Premium Gin"/>
        <meta name="description" content="Chiemsee Gin ist der Premium Gin vom Bayerischen Meer. Gin aus Bayern so einzigartig wie seine Heimat - nach Chiemgauer Brenntradition seit 1892." />


        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.chiemseegin.de/"/>
        <meta property="og:title" content="Chiemsee Premium Gin"/>
        <meta property="og:description" content="Chiemsee Gin ist der Premium Gin vom Bayerischen Meer. Gin aus Bayern so einzigartig wie seine Heimat - nach Chiemgauer Brenntradition seit 1892." />
        <meta property="og:image" content={dynamicImage}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.chiemseegin.de/"/>
        <meta property="twitter:title" content="Chiemsee Premium Gin"/>
        <meta property="twitter:description" content="Chiemsee Gin ist der Premium Gin vom Bayerischen Meer. Gin aus Bayern so einzigartig wie seine Heimat - nach Chiemgauer Brenntradition seit 1892." />
        <meta property="twitter:image" content={dynamicImage}/>

      </Head>
      {/* <Helmet>
        <title>Chiemsee Premium Gin</title>
        
        <meta name="description" content="Chiemsee Gin ist der Premium Gin vom Bayerischen Meer. Gin aus Bayern so einzigartig wie seine Heimat - nach Chiemgauer Brenntradition seit 1892." />
          <meta property="og:type" content="shop" />
          <meta name="og:title" property="og:title" content="Chiemsee Gin" />
          <meta name="og:description" property="og:description" content="Der Gin vom bayrischen Meer" />
          <meta property="og:site_name" content="Chiemsee Gin" />
          <meta property="og:url" content="https://chiemseegin.de" />  
          <meta name="twitter:card" content="summary" /> 
          <meta name="twitter:title" content="Chiemsee Premium Gin" />
          <meta name="twitter:description" content="Der Gin vom bayrischen Meer" />
          <meta name="twitter:site" content="https://chiemseegin.de" />
          <meta name="twitter:creator" content="" />
          <link rel="icon" type="image/png" href="/.next/static/images/favicon.ico" />
          <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
          <meta property="og:image" content="/static/images/public/images/bild_sina_scan_600dpi_dunkel.b420ba87e207135b1a5636506aec18ea.png" />  
          <meta name="twitter:image" content="/static/images/public/images/bild_sina_scan_600dpi_dunkel.b420ba87e207135b1a5636506aec18ea.png" />   
       
      
      </Helmet> */}

    <div>
      {multiple ?
        <Product product={productMultiple} />
      :
      <Product product={product}/>}
    </div>
    <section className="md:ml-auto mr-4 md:w-1/2 w-3/4 mx-auto">
      <div className="flex flex-row ml-0 lg:ml-44 mx-auto">
        <div className="flex items-center mr-4 mb-4 justify-items-end" onClick={(()=> setMultiple(false))}>
        <input id="radio1" type="radio" name="radio" className="hidden" checked={!multiple} readOnly />
        <label htmlFor="radio1" className="flex items-center cursor-pointer">
        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
        Flasche</label>
        </div>

        <div className="flex items-center mr-4 mb-4" onClick={(()=> setMultiple(true))}>
          <input id="radio2" type="radio" name="radio" className="hidden" checked={multiple} readOnly/>
          <label htmlFor="radio2" className="flex items-center cursor-pointer">
          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
          Kiste (6 Flaschen)</label>
        </div>
      </div>
   </section>
    <div>
      <div className="w-full border-b border-cgblue font-bold ml-17 flex">
        <div className="ml-14 border-b-2 border-cgblue">
          <h3 className=" mb-2">Beschreibung</h3>
        </div>
      </div>

      <section className="flex flex-col space-y-6 mt-12">
          <div className="flex flex-col space-y-6 ">
          <p>Chiemsee Gin ist der Premium Gin vom bayerischen Meer. Unser Wacholderschnaps wird in der seit 1829 bestehenden Edelbrandmanufaktur Guggenbichler in traditioneller Handarbeit destilliert. Alle Zutaten f??r unseren Gin werden mit gr????ter Sorgfalt und mit Blick auf Nachhaltigkeit handverlesen. Ein au??ergew??hnlicher und facettenreicher Gin von und f??r seine bayerische Heimat und die Menschen, die diese so sehr lieben.</p>

          <p>Handverlesene Kr??uter, kristallklares Gebirgsquellwasser und ??ber 5 Generationen ??berlieferte Destillationskunst der Edelbrandmanufaktur Guggenbichler in Frasdorf am Chiemsee ergeben einen bayerischen Premium Gin der Extraklasse. Mit viel Liebe und Herzblut wird Chiemsee Gin in kleinen exklusiven Chargen hergestellt. Qualit??t steht f??r uns an erster Stelle.</p>
          <p>Mit jeder verkauften Flasche spenden wir 1 ??? f??r den chiemgauer Naturschutz und unterst??tzen somit die Erhaltung unserer einzigartigen Heimat.</p>
          </div>

          <div>
            <IngList>
              <li>
              Alkohol: 45% VOL
              </li>
              <li>
              F??llmenge: 0,5L Flasche
              </li>
            </IngList>
          </div>


      </section>
      <section className="flex flex-col space-y-6 mt-12">
      <h3 className="">Unser Chiemgauer Gin Reinheitsgebot</h3>
      <div className="flex flex-col space-y-6 "> 
      <p>Chiemsee Gin z??hlt zur Kategorie <i>London Dry Gin</i> und somit zur K??nigsklasse unter den Gins. <i>London Dry Gin</i> hat nichts mit einer Herkunftsbezeichnung zu tun, sondern ist eine besondere Kategorie mit bestimmten Regeln f??r Destillation und Zutaten, die erf??llt werden m??ssen. Quasi eine Art Reinheitsgebot.</p>
      <p>In der EU-Verordnung zu Spirituosen vom Jahr 2008 ist festgelegt, was sich als <i>London Dry Gin</i> bezeichnen darf. Dazu z??hlt unter anderem eine mindestens 3-fache Destillation sowie pflanzlich-landwirtschaftliche Ausgangsstoffe wie Getreide oder Melasse. Die Zugabe von Zucker, Aromen und Farbstoffen ist streng untersagt.</p>
      <p>Wir sind stolz, dass sich unser Chiemsee Gin als <i>London Dry Gin</i> betiteln darf.</p>
      </div>
        </section>

    </div>
    </div>
  )
}




export const getServerSideProps: GetServerSideProps = async () => {
  
  const product = await shopifyClient.product.fetchByHandle('chiemsee-gin')
  const productPackage = await shopifyClient.product.fetchByHandle('chiemsee-gin-kiste-6-flaschen')
  
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      productPackage: JSON.parse(JSON.stringify(productPackage))
    }, 
  }
  
  
}

export default ProductPage