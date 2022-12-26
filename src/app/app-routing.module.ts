import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products-fake-store/products-fake-store.module').then(m => m.ProductsFakeStoreModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {}
