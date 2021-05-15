import { ApolloClient,
  ApolloLink,
  HttpLink, 
  InMemoryCache, 
  NormalizedCacheObject } from "@apollo/client";
import * as React from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const recipesLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS,
});

const shopifyLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SHOPIFY_STORE,
  credentials: process.env.NEXT_PUBLIC_SHOPIFY_TOKEN
});

const createApolloClient = () => {
  return new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: 
      ApolloLink.split( //////// here i have to add logic for shopify
          operation => operation.getContext().api === "shopify",
          shopifyLink,
          recipesLink
      )
      ,    
      
      cache: new InMemoryCache({
          typePolicies: {
              Query: {
                  fields: {
                      recipes: {
                          keyArgs: false,
                          merge(existing = [], incoming) {
                              return [...existing, ...incoming];
                          }
                      },
                      
                      // reviews: {
                      //     keyArgs: false,
                      //     merge(existing = [], incoming) {
                      //         return [...existing, ...incoming];
                      //     }
                      // }
                  }
              }
          }
      })
  });
};

const initApollo:(initState?: null) => ApolloClient<NormalizedCacheObject> = (initState: any = null)  => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initState) {
      const exisitingCache = _apolloClient.extract();
      _apolloClient.cache.restore({...exisitingCache, ...initState});
  }

  if (typeof window ==="undefined") {
      return _apolloClient;
  }

  if (!apolloClient) {
      apolloClient = _apolloClient;
  }
  return _apolloClient;
};

const useApollo = (initState: any) => {
  const store = React.useMemo(() => initApollo(initState), [initState]);
  return store;
};

export {
  initApollo,
  useApollo
};