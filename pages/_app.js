import "../styles/globals.css";
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';


const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS,
  cache: new InMemoryCache()
});




function MyApp({ Component, pageProps }) {


  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}

export default MyApp;
