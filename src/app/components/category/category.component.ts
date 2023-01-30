import { Component, Input, OnInit } from '@angular/core';
import { category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/categoryServices/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  @Input() categories:category[] = []
  categorySelected:number | string = 0

  constructor(
    private categoryService:CategoryService
  ) {}
  ngOnInit(): void {
    this.categoryService.$categorySelected
      .subscribe(id =>
          this.categorySelected = id
        )
  }

  changeCategory(idCategory:number | string) {
    this.categoryService.changeCategory(idCategory)
  }
}
