import { Component,OnInit } from '@angular/core';
import { category } from 'src/app/models/category.model';
import { product } from 'src/app/models/product.mode';
import { CategoryService } from 'src/app/services/categoryServices/category.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  randomProductLoading:boolean = false
  randomProduct:product = {
    id: '',
    title: '',
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: ''
    },
    images: [''],
    price: 0
  }
  categories:category[] = []
  products:product[] = []
  limit:number = 20
  offset:number = 0

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.randomProductLoading = true
    this.productService.getRandomProducts()
      .subscribe(product => {
        this.randomProduct = product
        this.randomProductLoading = false
      })
    this.categoryService.getAllCategories()
      .subscribe(categories => {
        this.categories = categories
      })
    this.productService.getProducts(this.limit,this.offset)
      .subscribe(products => {
        this.products = products
      })
  }
}
