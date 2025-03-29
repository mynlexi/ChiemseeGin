import Client from 'shopify-buy'




const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE,
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_TOKEN

});

export { client }