import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/app/models/product.mode';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API = `https://damp-spire-59848.herokuapp.com/api/products`
  constructor(
    private http: HttpClient
  ) { }

  getRandomProducts() {
    let randomNumber = Math.ceil(Math.random()*10)
    return this.http.get<product>(`${this.API}/${randomNumber}`)
  }

  getProducts(limit:number,offset:number) {
    return this.http.get<product[]>(`${this.API}?limit=${limit}&offset=${offset}`)
  }

  getProduct(id:number | string) {
    return this.http.get<product>(`${this.API}/${id}`)
  }
}
