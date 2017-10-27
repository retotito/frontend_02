import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('//auth/signup');
  }

  ngOnInit() {
  }

}
