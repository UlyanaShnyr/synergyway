import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from 'src/app/services/product.service';
import { Item } from 'src/app/entities/item.entity';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;
  private inc: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.inc = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.inc += item.quantity
    }

  }

}
