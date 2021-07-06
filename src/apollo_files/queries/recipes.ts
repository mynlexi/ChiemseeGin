import { gql } from "@apollo/client";

export const  ALL_RECIPES = gql`
query ALL_RECIPES {
  recipes {
    title
    description
    ginRecommendation {
      html
    }
    ingredients {
      html
    }
    preperation {
      html
    }
    recipeImage {
      height
      width
      url
    }
    tonicRecommendation {
      html
    }
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
    description
    ginRecommendation {
      html
    }
    id
    ingredients {
      html
    }
    preperation {
      html
    }
    recipeImage {
      height
      width
      url
    }
    tonicRecommendation {
      html
    }
  }
}
`

export const RECIPE_INDEX = gql`
query indexRecipe {
  recipes(orderBy: updatedAt_DESC) {
    ingredients {
      html
    }
    title
    recipeImage {
      height
      url
      width
    }
  }
}

`