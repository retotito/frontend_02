import { Component, OnInit } from '@angular/core';
import { MAINMENU } from 'app/common/main-menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menuItems = MAINMENU;

  constructor() { }

  ngOnInit() {
  }

}
