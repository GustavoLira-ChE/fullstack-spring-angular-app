import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() title: string = "";
  activeMobileMenu = false;
  productCounter = 0;
  totalPurchase = 0;

  constructor(
    private router: Router,
    private shopping: ShoppingCartService
  ){}
  ngOnInit(): void {
    this.shopping.cart$.subscribe(products => {
      this.productCounter = products.length;
      this.totalPurchase = products.reduce((acum,current) => acum + current.unitPrice, 0);
    })
  }

  toggleActiveMobileMenu(){
    this.activeMobileMenu = !this.activeMobileMenu;
  }

  goHome(){
    this.router.navigate(["/"]);
  }
}
