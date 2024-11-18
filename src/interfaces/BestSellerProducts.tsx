export interface Product {
    id: string;
    name: string;
    image: string;
    store: string;
    inStock: boolean;
    price: number;
    discountedPrice: number;
  }
  
  export type Products = Product[];