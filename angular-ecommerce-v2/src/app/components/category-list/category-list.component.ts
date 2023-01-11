import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategory.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{

  productCategory: ProductCategory[] = [];

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.getProductCategory();
  }

  getProductCategory(){
    this.productService.getCategoryList().subscribe(
      data => {
        this.productCategory = data;
      }
    )
  }
}
