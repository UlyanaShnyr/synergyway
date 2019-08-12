import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { NavbarComponent } from './components/navbar/navbar.component';

import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
