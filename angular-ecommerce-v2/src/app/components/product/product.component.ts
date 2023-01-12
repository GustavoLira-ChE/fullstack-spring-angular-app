import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product: Product = {
    id: 0,
    sku: "",
    name: "",
    description: "",
    unitPrice: 0,
    imageUrl : "",
    active: false,
    unitsInStock: 0,
    dateCreated: new Date(),
    lastUpdated: new Date(),
    category_id: 0,
  }
  @Output()
  addedProduct = new EventEmitter<Product>();

  addToCart() {
    this.addedProduct.emit(this.product);
  }

}
