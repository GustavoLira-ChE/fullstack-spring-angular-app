import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list-by-category',
  templateUrl: './product-list-by-category.component.html',
  styleUrls: ['./product-list-by-category.component.scss']
})
export class ProductListByCategoryComponent implements OnInit, OnDestroy{

  products: Product[] = [];
  public id: string | number | null | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shopping: ShoppingCartService
  ){ }

  ngOnDestroy(): void {
    this.destroySubscribe();
  }
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      console.log(param['id'])
      this.id = param['id'];
      this.productList();
    })
  }
  productList() {
    this.productService.getCategoryList().subscribe(
      data => {
        let array: Product[][] = data.filter(product => product.id == this.id).map((product) => product.products);
        this.products = array.flat();
      }
    )
  }
  destroySubscribe(){
    this.productService.getCategoryList().subscribe().closed;
  }

  onAddToShoppingCart(product: Product) {
    this.shopping.addToShoppingCart(product);
  }
}
