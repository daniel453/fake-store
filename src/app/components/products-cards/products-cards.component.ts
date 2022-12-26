import { Component, Input } from '@angular/core';
import { product } from 'src/app/models/product.mode';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css']
})
export class ProductsCardsComponent {
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
}
