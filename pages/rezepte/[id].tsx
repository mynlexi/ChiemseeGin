import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router";
import Image from 'next/image'
import styled from 'styled-components'
import { initApollo } from "../../src/apollo_files/apolloClient"
import {ALL_RECIPES, RECIPE_INFO, RECIPE_TITLES} from "../../src/apollo_files/queries/recipes"

const IngList = styled.div`
  li {
    list-style-type: disc;
  }
  
`

const PrepList = styled.div`
  li {
    list-style-type: decimal;
  }
  
`



type Recipev2 = any

interface RecipeId {
  title: string,
  __typename: Recipev2
}

const Recipe: NextPage<any> = ({ initialApolloState, params}) => {

  const recipe = initialApolloState.ROOT_QUERY[params]
  // const recipe = initialApolloState[ref]
  const {
    title: title,
    ginRecommendation: ginRec,
    ingredients: ingredients,
    preperation: preperation,
    recipeImage: ImageOb,
    description: description,
    tonicRecommendation: tonicRec

  } = recipe



  return (
    <section className="min-h-screen">
      <h3 className="mx-auto text-center">{title}</h3>
      <div className="rounded-full h-1/4 w-1/4 mx-auto my-6"> 
        <Image 
          src={ImageOb.url}
          height={ImageOb.height}
          width={ImageOb.width}  className="rounded-full"/>
      </div>

      <div>
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <div>
          <h4>Zutaten</h4>
          <IngList dangerouslySetInnerHTML={{ __html: ingredients.html }}></IngList>
        </div>
        <div className ="flex flex-col space-y-4">
            <h4>Zubereitung</h4>
            <PrepList className=""dangerouslySetInnerHTML={{ __html: preperation.html }}></PrepList>
            <h4>Passende Tonic Empfehlung: </h4>
            <div dangerouslySetInnerHTML={{ __html: tonicRec.html }}></div>
            <h4>Passende Gin Empfehlung: </h4>
            <div dangerouslySetInnerHTML={{ __html: ginRec.html }}></div>
        </div>
      </div>
    </section>
  )
  
}


export const getStaticPaths: GetStaticPaths = async () => {

  const apolloClient = initApollo()
  
  const {data: {recipev2S}} = await apolloClient.query({
    query: RECIPE_TITLES,
    fetchPolicy: "no-cache"
  });
  
  const paths = recipev2S.map((recipe: RecipeId) => ({
    params: { id: recipe.title.split(" ").join("-")}
    
  }))

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps: GetStaticProps = async ({params}) =>{

  const apolloClient = initApollo();
  let id = ""
  if (typeof params?.id === "string"){
     id = params?.id?.split("-").join(" ")
    await apolloClient.query({
      query: RECIPE_INFO,
      variables: {title: id}
    })
  }
  const queryParams = `recipev2({"where":{"title":"${id}"}})`
 
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      params: queryParams
    }, 
    revalidate: 1
  }
}

export default Recipe

