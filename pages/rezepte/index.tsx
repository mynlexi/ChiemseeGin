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
      let innerHtml = recipe.ingredients.html
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
    path2xl: '/images/headers/bluesuper-crop.jpeg',
    title: 'Unsere Rezepte',
   
  }
  

 
  return (
    <div className="min-h-screen">
      <Head>
        <title>Gin Rezepte | Chiemsee Gin</title>
     
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
     
      <section className="flex flex-col py-20">
        <h3>Chiemgauer Rezepte</h3>
        <p>Einen guten Gin Tonic zuzubereiten, ist keine all zu Große Herausforderung. Nicht umsonst ist der altbekannte Klassiker unter den Gin Cocktails so sehr beliebt. Das passende Tonic zum Gin zu finden ist dagegen schon etwas schwieriger. In den hier aufgeführten Rezepten findest Du deswegen nicht nur Inspiration, sondern auch perfekt abgestimmte Tonic Empfehlungen passend zum Chiemsee Premium Gin</p>
        
        <Recipes />

   
      </section>


    </div>
  )
}
