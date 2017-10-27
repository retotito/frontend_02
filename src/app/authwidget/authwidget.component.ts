import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileMenuService } from '../shared/services/mobile-menu.service';

@Component({
  selector: 'app-authwidget',
  templateUrl: './authwidget.component.html',
  styleUrls: ['./authwidget.component.css']
})
export class AuthwidgetComponent implements OnInit {

  constructor(
    public authService: AuthService, 
    private router: Router,
    public mmService: MobileMenuService
  ) { }

  onLogout() {
    this.authService.logout();
    this.closeMobileMenu();
    this.router.navigateByUrl('//auth/signin');
  }

  closeMobileMenu() {
    this.mmService.isOpen = false;
    this.mmService.callComponentMethod();
  }

  ngOnInit() {
  }

}
