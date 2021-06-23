import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";


import CheckoutIdProvider from "../src/hooks/useCheckoutId";
import CartProvider from "../src/hooks/useCartStorage";
import SideCartProvider from "../src/hooks/useOpenSidebar";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useApollo } from "../src/apollo_files/apolloClient";
import Layout from "../src/components/Layout";


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
    {components.reduceRight(
      (acc, Comp) => (
        <Comp>{acc}</Comp>
      ),
      children
    )}
  </>
);

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Providers
        components={[CheckoutIdProvider, CartProvider, SideCartProvider]}
      >
        <Layout>
          <div>in development</div>
          {/* <Component {...pageProps} /> */}
        </Layout>
      </Providers>
    </ApolloProvider>
  );
}

export default MyApp;
