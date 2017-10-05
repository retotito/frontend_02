import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authwidget',
  templateUrl: './authwidget.component.html',
  styleUrls: ['./authwidget.component.css']
})
export class AuthwidgetComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('//auth/signin');
  }

  ngOnInit() {
  }

}
