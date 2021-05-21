// import React from 'react';
// import { getStorage, IProductStorage, setStorage } from '../utils/storage';

// type StorageContextType = {
//   cartStorage: Array<IProductStorage> | null;
// }

// type StorageUpdateContextType = {
//   addCartValue: (value: IProductStorage) => void;
//   clearCart: () => void;
//   removeCartValue: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   setCartStorage: React.Dispatch<React.SetStateAction<IProductStorage[] | null>>;
//   updateItemsQuantities: (cartQuantities: number[]) => void;
// }

// const StorageContext = React.createContext<StorageContextType | undefined>(undefined);
// const StorageDispatchContext = React.createContext<StorageUpdateContextType | undefined>(undefined);

// export const useStore = (): StorageContextType | undefined => React.useContext(StorageContext);
// export const useStoreUpdate = (): StorageUpdateContextType | undefined => React.useContext(StorageDispatchContext);


// const useStorage = (key: string) => {
//   const CART_KEY = "cart-products";

//   const [ cartStorage, setCartStorage ] = React.useState(getStorage(CART_KEY));

//   const addCartValue = (value: IProductStorage) => {
//     const items = getStorage(key);

//     if (!items) {
//         setStorage(key, [value]);
//     } else {

//         const isItemDuplicate = items.some(item => item.id === value.id);

//         if (!isItemDuplicate) {
//             items.push(value);
//             setStorage(key, items);
//         } else {
//             return;
//         }
//     }

//     setCartStorage(items);
//   };

//   const updateItemsQuantities = (quantities: number[]) => {
//     const items = getStorage(key)!;
//     let updatedItems: any = items;

//     if (items) {
//         updatedItems = items.flatMap((item, index) => {
//             if (quantities[index] < 1) {
//                 return [];
//             }
            
//             return { 
//                 ...item, 
//                 quantity: quantities[index] 
//             };
//         });

//             setStorage(key, updatedItems);
//     }

//     setCartStorage(updatedItems);
//   };

//   const clearCart = () => {
//     setStorage(CART_KEY, []);
//     setCartStorage([]);
//   };

//   const removeCartValue = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const items = getStorage(key)!;

//     const productElementId = (event.target as HTMLElement).closest("li")?.id;

//     const newStorage = items?.filter(item => item.id !== productElementId);

//     setStorage(key, newStorage);
//     setCartStorage(newStorage);
//   };

//   return {
//     addCartValue,
//     cartStorage,
//     clearCart,
//     removeCartValue,
//     setCartStorage,

//     updateItemsQuantities
//   };
// };

// const StorageProvider = ({ children }: { children: React.ReactNode}): React.ReactElement  => {
//   const { cartStorage, 
//       addCartValue, 
//       clearCart,
//       removeCartValue,
//       updateItemsQuantities } = useStorage("cart-products");



//   return (
//       <StorageContext.Provider value={{ cartStorage }} >
//           <StorageDispatchContext.Provider value={{
//               addCartValue,
//               clearCart, 
//               removeCartValue, 
//               updateItemsQuantities
//               }}
//               >
//               {children} 
//           </StorageDispatchContext.Provider>
//       </StorageContext.Provider>
//   );
// };

// export default StorageProvider;

export {}