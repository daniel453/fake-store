import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsFakeStoreRoutingModule } from './products-fake-store-routing.module';
import { HeroComponent } from '../components/hero/hero.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsCardsComponent } from '../components/products-cards/products-cards.component';
import { CategoryComponent } from '../components/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListErrorsComponent } from '../components/list-errors/list-errors.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { IsIntersectingDirective } from '../directives/is-intersecting.directive';

@NgModule({
  declarations: [
    HeroComponent,
    ProductsComponent,
    ProductsCardsComponent,
    CategoryComponent,
    ProductDetailComponent,
    LoadingComponent,
    ListErrorsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    IsIntersectingDirective
  ],
  imports: [
    CommonModule,
    ProductsFakeStoreRoutingModule,
    FormsModule
  ],
  providers: [

  ]
})
export class ProductsFakeStoreModule { }
