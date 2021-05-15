import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router";
import Image from 'next/image'

import { initApollo } from "../../src/apollo_files/apolloClient"
import {ALL_RECIPES, RECIPE_INFO, RECIPE_TITLES} from "../../src/apollo_files/queries/recipes"

type Recipe = any

interface RecipeId {
  title: string,
  __typename: Recipe
}

const Recipe: NextPage<any> = ({ initialApolloState, params}) => {
  console.log({ initialApolloState , params})

  console.log(initialApolloState.ROOT_QUERY, params)
  const recipe = initialApolloState.ROOT_QUERY[params]
  // const recipe = initialApolloState[ref]
  console.log("next page")
  const router = useRouter()

  const {
    title: RecipeTitle,
    recipeIngredients: Ingredients,
    recipeInstructions:  Instructions,
    recipePicture: Picture

  } = recipe

  let innerInstruction = Instructions.html

  return (
    <div>
      <h1>{RecipeTitle}</h1>
      <p>{Ingredients}</p>
      <div dangerouslySetInnerHTML={{ __html: innerInstruction }}></div>
      <Image 
        src={Picture.url}
        height={Picture.height}
        width={Picture.width}
      />
    </div>
  )
  
}


export const getStaticPaths: GetStaticPaths = async () => {

  const apolloClient = initApollo()
  
  const {data: {recipes}} = await apolloClient.query({
    query: RECIPE_TITLES,
    fetchPolicy: "no-cache"
  });
  
  const paths = recipes.map((recipe: RecipeId) => ({
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
  const queryParams = `recipe({"where":{"title":"${id}"}})`
 
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      params: queryParams
    }, 
    revalidate: 1
  }
}

export default Recipe

