/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductInterface } from 'src/product-interface/product-interface.interface';
import { Product } from './product.interface';

@Injectable()
export class ProductService implements ProductInterface {
    private products: Product[] = [];

    getAllProducts(): Product[] {
      return this.products;
    }
  
    addProduct(product: Product): string | Product {
      if (product.prixVente > product.prixAchat) {
        if (product.prixAchat < 100) {
          product.tva = 0.07;
        } else if (product.prixAchat < 200) {
          product.tva = 0.10;
        } else {
          product.tva = 0.15;
        }
  
        this.products.push(product);
        return product;
      } else {
        return "Erreur : Le prix de vente doit être supérieur au prix d'achat.";
      }
    }
  
    deleteProduct(index: number): string {
      if (index >= 0 && index < this.products.length) {
        this.products.splice(index, 1);
        return `Le produit avec l'indice ${index} a été supprimé.`;
      }
      return "Erreur : Indice de produit non valide.";
    }
  
    getProduct(index: number): Product {
      return this.products[index];
    }
}
