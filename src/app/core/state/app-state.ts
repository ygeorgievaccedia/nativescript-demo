import { Product } from '../models/product.model';

export type StateKey = "users" | "products" | "selectedProduct" | "currentUSer" | "categories" | "defaultCategory";

export interface State {
    users: any[];
    products: Product[];
    currentUser: any;
    categories: any[];
    defaultCategory: any;
    [key: string]: any;
}

export const INITIAL_STATE: State = {
    users: [],
    products: [],
    selectedProduct: undefined,
    currentUser: undefined,
    categories: [],
    defaultCategory: undefined
}
