import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: '1', name: 'article 1', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 25 },
            { id: '2', name: 'article 2', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 35 },
            { id: '3', name: 'article 3', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 45 }
        ];
    }

    AllProducts(): Product[] {
        return this.products;
    }

    select(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}