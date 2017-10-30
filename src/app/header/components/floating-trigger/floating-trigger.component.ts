import { MobileMenuService } from '../../../shared/services/mobile-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-trigger',
  templateUrl: './floating-trigger.component.html',
  styleUrls: ['./floating-trigger.component.scss'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class FloatingTriggerComponent implements OnInit {
  isScrolledDown = false;

  constructor(public mmService: MobileMenuService) { }

  ngOnInit() {
  }

  triggerMobileMenu () {
    this.mmService.isOpen = !this.mmService.isOpen;
    this.mmService.callComponentMethod();
  }

  onScroll(envent) {
    if (window.pageYOffset > 80 ) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  }

}
