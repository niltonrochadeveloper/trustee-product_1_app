declare module "core/store" {
  import { Store } from "@reduxjs/toolkit";
  import { Persistor } from "redux-persist";

  // Redux
  export const persistor: Persistor;

  export interface ProductsProps {
    id: number;
    name: string;
    price: number;
  }

  // RootState
  export interface RootState {
    auth: { user: any; token: string };
    count: { count: number };
    product: { items: ProductsProps[] };
    theme: { mode: string };
  }

  // Actions
  export const setAuth: any;
  export const setTheme: any;
  export const addProduct: (val: ProductsProps) => val;
  export const removeProduct: any;
  export const resetProducts: any;
  export const setCountDecrease: any;
  export const setCountIncrease: any;
  export const deleteLastProduct: Function;
  export default store;
}
