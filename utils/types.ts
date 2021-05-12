// export const ADD_PRODUCT = 'ADD_PRODUCT'
// export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'


// export type Product = {
//   id: string
//   name: string
//   price: number
// }

// export type AddProductAction = {
//   type: typeof ADD_PRODUCT
//   payload: {
//     product: Product
//   }
// }


// export type RemoveProductAction = {
//   type: typeof REMOVE_PRODUCT
//   payload: {
//     product: Product
//   }
// }

// export type ProductActions = AddProductAction | RemoveProductAction

// export type ProductState = {
//   inCart: Product[]
// }

// export type AppState = {
//   product: ProductState
// }

// // from server we get product info, recepies
// // from client we get products in cart, checkout id
// export interface State {
//   server?: any
//   client: ProductState
// }