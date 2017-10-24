import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//import 'rxjs/Rx';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/throw';
import { Observable } from "rxjs";

 
@Injectable()
export class DataService {
  constructor(private url: string,public http: Http) {}

  getAll(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.getToken());
    return this.http.get(this.url, {headers: headers})
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }

  queryAll(params: string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.getToken());
    return this.http.get(this.url+params, {headers: headers})
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }
 
  create(resource){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.getToken());
    
    return this.http.post(this.url, JSON.stringify(resource), {headers: headers})
      .map((res:Response) => res.json())  
      .catch(this.handleError);
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource.title))  // to be dynamic
      .map((res:Response) => res.json())    
      .catch(this.handleError);
  }
 
  delete(id){
    let headers = new Headers();
    headers.append('Authorization', this.getToken());
 
    return this.http.delete(this.url + '/' + id, {headers: headers})
      .map((res:Response) => res.json())    
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw( new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

  private getToken() {
    const token = localStorage.getItem('token') 
    ? localStorage.getItem('token')
    : '';
    return token;
  }
 
}
