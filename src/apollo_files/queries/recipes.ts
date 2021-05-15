import { gql } from "@apollo/client";

export const  ALL_RECIPES = gql`
query AllRecipes {
  recipes {
    id
    recipeIngredients
    recipePicture {
      height
      size
      url
      width
    }
    recipeInstructions {
      html
    }
    title
  }
}
`;

export const RECIPE_TITLES = gql`
query RecipesTitles {
  recipes {
    title
  }
}
`

export const RECIPE_INFO = gql`
query GetSingleRecipe ($title: String!) {
  recipe(where: {title: $title}) {
    title
    recipeIngredients
    recipeInstructions {
      html
    }
    recipePicture {
      height
      url
      width
    }
  }
}
`