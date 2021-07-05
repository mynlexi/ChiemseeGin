import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useQuery, gql } from '@apollo/client';
import  {ALL_RECIPES, RECIPE_INDEX, RECIPE_INFO, RECIPE_TITLES} from '../../src/apollo_files/queries/recipes';
import { initApollo } from '../../src/apollo_files/apolloClient';
import React from 'react';
import Header from '../../src/components/general/header';




function Recipes() {
  const { loading, error, data } = useQuery(RECIPE_INDEX);
  console.log(data, error)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  

  return (
    <div className="grid grid-cols-6 gap-8 my-12">
   
    {data.recipes.map((recipe) => {
      
      let image = recipe.recipeImage
     
        // height
        // width
        // url
      
      return (
      <div key={recipe.id} className="col-span-2 ">
        <Link href={`rezepte/${recipe.title.split(" ").join("-")}`}><a> 
          <div className="flex space-x-5 flex-col justify-around  ">
            <div className="w-36 mx-auto">
              <Image src={image.url} height={image.height} width={image.width} layout="responsive" className="rounded-full" alt="" />
            </div>
            <div >
            
            <p className="text-center">{recipe.title}</p>
            
          
     
              
           </div>
          </div>
          </a></Link>
      </div>
      
      
      )
    })}
    </div>
    ) 
}



export default function RecipeMain() {
  
  const header = {
    path: '/images/headers/blue50small-crop.jpg',
    pathxs: '/images/headers/blue50small-crop.jpg',
    pathsm: '/images/headers/blue50small-crop.jpg',
    pathmd: '/images/headers/blue50small-crop.jpg',
    pathlg: '/images/headers/blue50middle-crop.jpg',
    pathxl: '/images/headers/bluelarge-crop.jpg',
    path2xl: '/images/headers/bluesuper-crop.jpeg'
  
   
  }
  

 
  return (
    <div className="min-h-screen">
      <Head>
        <title>Gin Rezepte | Chiemsee Gin</title>
     
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
     
      <section className="flex flex-col pb-20 pt-16  space-y-3">
        <h3 className ="text-center mb-20 mt-0  page-title" >Gin ist Kunst</h3>
        <p>Gin ist Kunst. Gin ist unglaublich vielfältig – mit unseren bayerischen Rezepten wollen wir in die facettenreiche Welt des Gins einladen.</p>
        <p>Wir schreiben bei unseren Rezepten bewusst keine Mengenangabe für das Tonic Water. Warum? Weil jeder seinen Gin gerne anders trinkt. Der eine mag’s etwas stärker, der andere etwas leichter. Die Menge des Tonic Waters liegt also ganz bei Dir – hier gibt es kein <i>richtig</i>oder <i>falsch</i>. Am besten mit etwas weniger Tonic Water starten und bei Bedarf weiter auffüllen.</p>
        <p>Wir lieben Gin Tonic schlicht. Premium Gin + Premium Tonic Water + passendes Toping. Fertig. Mit unseren chiemgauer Rezepten wollen wir jedoch etwas Inspiration geben, wie facettenreich Gin sein kann.</p>
        <Recipes />

   
      </section>


    </div>
  )
}
