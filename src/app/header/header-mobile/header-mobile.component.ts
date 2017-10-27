import { MobileMenuService } from '../../shared/services/mobile-menu.service';
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

  windowWitdth = 0;

  constructor(public mmService: MobileMenuService) { }
  

  triggerMobileMenu () {
    this.mmService.isOpen = !this.mmService.isOpen;
    this.mmService.callComponentMethod();
  }

  onResize(event){
    let eventWidth = event.target.innerWidth;
    if (this.windowWitdth != eventWidth ) {
      this.mmService.isOpen = false;
      this.mmService.callComponentMethod();
    }
    this.windowWitdth = window.innerWidth;
  }

  ngOnInit() {
    this.windowWitdth = window.innerWidth;
  }

}
