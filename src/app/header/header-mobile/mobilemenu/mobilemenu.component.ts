import { MobileMenuService } from './../../../services/mobile-menu.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.css'],
  animations: [
    trigger('menuState', [
      state('open', style({
        //transform: 'translateX(-100%)',
        left: '-100%',
        display: 'block'
      })),
      state('closed',   style({
        //transform: 'translateX(0px)',
        left: '0px',
        display: 'none'
      })),
      transition('closed <=> open', animate('80ms ease-in')),
    ])
  ]
})
export class MobilemenuComponent  {
  myMenuState = 'closed';

  constructor(public mmService: MobileMenuService) { }

  myServiceListener = this.mmService.componentMethodCalled$.subscribe(
    (isOpen) => {
      if (isOpen) { 
        this.myMenuState = 'open';
      } else
      { 
        this.myMenuState = 'closed';
      }
    }
  );

  closeMenu () {
    this.myMenuState = 'closed';
    this.mmService.isOpen = false;
  }

  triggerMobileMenu () {
    this.mmService.isOpen = !this.mmService.isOpen;
    this.mmService.callComponentMethod();
  }
  

}
