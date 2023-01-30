import { Component, Input } from '@angular/core';
import { category } from 'src/app/models/category.model';
import { product } from 'src/app/models/product.mode';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() product:product = {
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
  @Input() categories:category[] | null = null
  @Input() productLoading?:boolean
}
