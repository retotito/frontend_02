import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';



import { User } from './user.model';

@Injectable()
export class AuthService {
  constructor(private http: Http ) {}

  signup (user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/api/auth/register', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
      ;
  }

  signin (user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/api/auth/login', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
      ;
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() { 
    return tokenNotExpired(); 
  }


}
