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
  categorySelected:number = 0
  categories:category[] | null = null
  productsLoading:boolean = false
  products:product[] = []
  limit:number = 20
  offset:number = 0

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.randomProductLoading = true
    this.productsLoading = true

    this.productService.getRandomProducts()
      .subscribe(product => {
        this.randomProduct = product
        this.randomProductLoading = false
      })

    this.categoryService.getAllCategories()
      .subscribe(categories => {
        this.categories = categories
        this.categories.push({id: 0,name:'Todos',typeImg:'any'})
      })

    this.getProducts()

    this.categoryService.$categorySelected
      .subscribe(id => this.changeProductsByCategory(id))
  }

  changeProductsByCategory(id:number | string) {
    this.productsLoading = true
    if(id == 0) {
      this.getProducts()
    } else {
      this.categoryService.getProductsCategory(id)
      .subscribe(products => {
        this.products = products
        this.productsLoading = false
      })
    }
  }

  getProducts() {
    this.productService.getProducts(this.limit,this.offset)
      .subscribe(products => {
        this.products.push(...products)
        this.productsLoading = false
        this.offset =+ this.limit
      })
  }

  getMoreProducts(e:boolean) {
    if(e) {
      this.getProducts()
    }
  }
}
