import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsFakeStoreRoutingModule } from './products-fake-store-routing.module';
import { HeroComponent } from '../components/hero/hero.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsCardsComponent } from '../components/products-cards/products-cards.component';
import { CategoryComponent } from '../components/category/category.component';


@NgModule({
  declarations: [
    HeroComponent,
    ProductsComponent,
    ProductsCardsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsFakeStoreRoutingModule,
  ]
})
export class ProductsFakeStoreModule { }
