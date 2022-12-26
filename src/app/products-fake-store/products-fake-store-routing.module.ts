import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavHomeComponent } from '../components/nav-home/nav-home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: NavHomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: ProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsFakeStoreRoutingModule { }
