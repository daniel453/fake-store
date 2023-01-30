import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.mode';
import { CartServiceService } from 'src/app/services/cartService/cart-service.service';
@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.css']
})
export class CartCounterComponent implements OnInit{
  showProducts:boolean = false
  productsInCart:product[] = []
  productsInCartCount:number = 0
  total = 0
  constructor(
    private cartService:CartServiceService
  ) {}
  ngOnInit():void {
    this.cartService.$productsInCart.subscribe(products => {
      this.productsInCart = products
      this.productsInCartCount = products.length
      this.total = this.cartService.getTotal
    })
    this.cartService.$modalProductDetail.subscribe(value => {
      this.showProducts = value
    })
  }

  removeToCart(product:product) {
    this.cartService.removeToCart(product)
  }

  showModal() {
    this.cartService.toggleModal()
  }

}
