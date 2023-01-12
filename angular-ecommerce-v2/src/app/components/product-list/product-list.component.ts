import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private shopping: ShoppingCartService
  ){ }
  ngOnInit(): void {
    this.productList();
  }
  productList() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

  onAddToShoppingCart (product: Product){
    this.shopping.addToShoppingCart(product);
  }
}
