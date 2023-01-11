import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductCategory } from '../models/productCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrlProducts = "http://localhost:8081/api/products";
  private baseUrlCategory = "http://localhost:8081/api/category";

  constructor(
    private httpClient: HttpClient
  ) {  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrlProducts).pipe(
      map(response => response)
    );
  }

  getCategoryList(): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(this.baseUrlCategory).pipe(
      map(response => response)
    )
  }


}
