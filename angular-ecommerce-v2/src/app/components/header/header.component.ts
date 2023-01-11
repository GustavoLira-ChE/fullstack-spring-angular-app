import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = "";
  activeMobileMenu = false;

  constructor(
    private router: Router
  ){}

  toggleActiveMobileMenu(){
    this.activeMobileMenu = !this.activeMobileMenu;
  }

  goHome(){
    this.router.navigate(["/"]);
  }
}
