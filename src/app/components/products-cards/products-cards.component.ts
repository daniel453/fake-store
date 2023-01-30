import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.mode';
import { CartServiceService } from 'src/app/services/cartService/cart-service.service';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css']
})
export class ProductsCardsComponent implements OnInit{
  isAdded:boolean = false
  @Input() product:product = {
    id: 0,
    title: '',
    category: {
      id: 0,
      name: '',
      typeImg: ''
    },
    description: '',
    images: [''],
    price: 0
  }

  constructor(
    private cartService:CartServiceService
  ) {}
  ngOnInit(): void {
    this.cartService.$productsInCart.subscribe(products => {
      const product:product | undefined = products.find(product => product.id == this.product.id)
      if(product !== undefined) {
        this.isAdded = true
      }else {
        this.isAdded = false
      }
    })
  }

  removeToCar() {
    this.cartService.removeToCart(this.product)
  }
  addToCar() {
    this.cartService.addToCart(this.product)
  }

}
