import { MobileMenuService } from './../../services/mobile-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderMobileComponent implements OnInit {

  constructor(public mmService: MobileMenuService) { }
  

  triggerMobileMenu () {
    this.mmService.isOpen = !this.mmService.isOpen;
    this.mmService.callComponentMethod();
  }

  onResize(event){
    this.mmService.isOpen = false;
    this.mmService.callComponentMethod();
  }

  ngOnInit() {
  }

}
