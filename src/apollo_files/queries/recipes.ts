import { gql } from "@apollo/client";

export const  ALL_RECIPES = gql`
query ALL_RECIPES {
  recipev2S {
    id
    description
    ginRecommendation {
      html
    }
    ingredients {
      html
    }
    title
    tonicRecommendation {
      html
    }
    recipeImage {
      height
      width
      url
    }
    preperation {
      html
    }
    
  }
}

`;

export const RECIPE_TITLES = gql`
query RecipesTitles {
  recipev2S {
    title
  }
}
`

export const RECIPE_INFO = gql`
query GetSingleRecipe ($title: String!) {
  recipev2(where: {title: $title}) {
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
      url
      width
    }
    tonicRecommendation {
      html
    }
    title
  }
}
`