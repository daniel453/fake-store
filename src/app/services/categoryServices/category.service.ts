import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { category } from 'src/app/models/category.model';
import { product } from 'src/app/models/product.mode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API = "https://damp-spire-59848.herokuapp.com/api/categories"
  private categorySelected = new BehaviorSubject<number | string>(0)
  $categorySelected = this.categorySelected.asObservable()

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get<category[]>(this.API)
  }

  getProductsCategory(idCategory:number | string) {
    return this.http.get<product[]>(`${this.API}/${idCategory}/products`)
  }

  changeCategory(idCategory:number | string) {
    this.categorySelected.next(idCategory)
  }
}
