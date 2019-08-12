import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product.entity';
import { ProductService } from 'src/app/services/product.service';

@Component({

  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

})

export class ProductComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.AllProducts();
  }

}
