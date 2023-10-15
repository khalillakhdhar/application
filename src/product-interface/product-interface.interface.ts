/* eslint-disable prettier/prettier */
import { Product } from "src/product/product.interface";

/* eslint-disable prettier/prettier */
export interface ProductInterface {
    getAllProducts(): Product[] ;
    addProduct(product: Product): string | Product;
    deleteProduct(index: number): string;
    getProduct(index: number): Product 
}
