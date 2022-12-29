import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }
}
/* 
getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }

If the data from the get request to backend was sent as:
{
  "_embedded": {
    "products": [
      {
        "sku": "BOOK-TECH-1000"
        This is a product object from backend
      }
    ]
  }
}

The inferface is needed to extract the objects

interface GetResponse {
  _embedded: {
    products: Product[]
  }
} */