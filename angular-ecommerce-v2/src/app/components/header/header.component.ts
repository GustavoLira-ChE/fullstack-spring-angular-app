import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = "";
  activeMobileMenu = false;

  toggleActiveMobileMenu(){
    this.activeMobileMenu = !this.activeMobileMenu;
  }
}
