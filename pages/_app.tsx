import "../styles/globals.css";
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

import CheckoutIdProvider from '../src/hooks/useCheckoutId'
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useApollo } from "../src/apollo_files/apolloClient";

interface IProviders {
  components: React.JSXElementConstructor<React.PropsWithChildren<any>>[];
  children: React.ReactNode;
}

// const client = new ApolloClient({
//   uri: process.env.NEXT_PUBLIC_GRAPHCMS,
//   cache: new InMemoryCache()
// });


const Providers = ({ components, children }: IProviders) => (
  <>
      {components.reduceRight((acc, Comp) => <Comp>{acc}</Comp>, children)}
  </>
);


function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
    
  const apolloClient = useApollo(pageProps.initialApolloState);

  return(
    <ApolloProvider client={apolloClient}>
        <Providers components={[CheckoutIdProvider]}>
          <Component {...pageProps} />
        </Providers>
      
    </ApolloProvider>
  ) 
}

export default MyApp;