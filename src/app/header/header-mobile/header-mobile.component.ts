import { MobileMenuService } from './../../services/mobile-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  constructor(private mmService: MobileMenuService) { }
  

  triggerMobileMenu () {
    this.mmService.isOpen = !this.mmService.isOpen;
    console.log("MMservice: " + this.mmService.isOpen);
  }

  ngOnInit() {
  }

}
