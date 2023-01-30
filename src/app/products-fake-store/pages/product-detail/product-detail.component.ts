import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { product } from 'src/app/models/product.mode';
import { CartServiceService } from 'src/app/services/cartService/cart-service.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  productId:number | string | null = null
  product:product | null = null
  productInCart:boolean = false
  constructor(
    private productService: ProductService,
    private route:ActivatedRoute,
    private cartService:CartServiceService
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.productId = params.get('id')
          if(this.productId !== null) {
            return this.productService.getProduct(this.productId)
          }
          return []
        })
      )
      .subscribe(product => this.product = product)
    this.cartService.$productsInCart.subscribe(products => {
      let response = products?.find(product => product.id == this.productId)
      if(response !== undefined) {
        this.productInCart = true
      } else {
        this.productInCart = false
      }
    })
  }

  addProductToCart() {
    if(this.product !== null) {
      this.cartService.addToCart(this.product)
    }
  }
  removeToCar() {
    if(this.product !== null) {
      this.cartService.removeToCart(this.product)
    }
  }
}
