import { Injectable } from '@angular/core';
import { product } from 'src/app/models/product.mode';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class CartServiceService {
  private modalProductDetail:boolean = false
  private productsInCart:product[] = []

  $modalProductDetail = new BehaviorSubject(this.modalProductDetail)
  $productsInCart = new BehaviorSubject(this.productsInCart)

  addToCart(product:product) {
    this.productsInCart?.push(product)
    this.$productsInCart.next(this.productsInCart)
  }
  removeToCart(product:product) {
    let productI:number | undefined = this.productsInCart?.findIndex(productCart => productCart.id == product.id)
    if(productI !== undefined) {
      this.productsInCart?.splice(productI,1)
      this.$productsInCart.next(this.productsInCart)
    }
  }

  toggleModal() {
    this.modalProductDetail = !this.modalProductDetail
    this.$modalProductDetail.next(this.modalProductDetail)
  }
  get getTotal():number {
    return this.productsInCart.reduce((count,product) => {
      return count + product.price
    },0)
  }
}
