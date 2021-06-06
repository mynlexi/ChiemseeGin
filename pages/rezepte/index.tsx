import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useQuery, gql } from '@apollo/client';
import  {ALL_RECIPES, RECIPE_INFO, RECIPE_TITLES} from '../../src/apollo_files/queries/recipes';
import { initApollo } from '../../src/apollo_files/apolloClient';
import React from 'react';
import Header from '../../src/components/general/header';




function Recipes() {
  const { loading, error, data } = useQuery(ALL_RECIPES);
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
    {data.recipev2S.map((recipe) => {
      let innerHtml = recipe.ingredients.html
      let image = recipe.recipeImage
     
        // height
        // width
        // url
      
      return (
      <div key={recipe.id}>
        <div className="flex space-x-5">
            <div className="w-28">
              <Image src={image.url} height={image.height} width={image.width} layout="responsive" className="rounded-full" />
            </div>
            <div className="my-auto">
            <Link href={`rezepte/${recipe.title.split(" ").join("-")}`}><a> 
            <h1>{recipe.title}</h1>
            </a></Link>
          
     
              <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
           </div>
          </div>
      </div>
      
      
      )
    })}
    </>
    ) 
}



export default function RecipeMain() {
  
  const header = {
    path: '/images/chiemseebackground.jpg',
    title: 'Unsere Rezepte',
   
  }
  

 
  return (
    <div className="{styles.container}">
      <Head>
        <title>Gin Rezepte | Chiemsee Gin</title>
     
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} />
      <section >
        <Recipes />

   
      </section>


    </div>
  )
}
