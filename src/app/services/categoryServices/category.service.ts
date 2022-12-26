import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { category } from 'src/app/models/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API = "https://damp-spire-59848.herokuapp.com/api/categories"
  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get<category[]>(this.API)
  }
}
