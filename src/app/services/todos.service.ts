import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

 
@Injectable()
export class TodosService {
 
  constructor(public http: Http) {}

  getTodos(){
    let headers = new Headers();
    const token = localStorage.getItem('token') 
      ?  '?token=' +localStorage.getItem('token')
      : '';
    headers.append('Authorization', token);

    return this.http.get('http://localhost:8080/api/todos', {headers: headers})
      .map((res:Response) => res.json())
      .catch((error:Response) => Observable.throw(error.json()));
    
  }
 


  createTodo(todo){
    let headers = new Headers();
    const token = localStorage.getItem('token') 
    ? localStorage.getItem('token')
    : '';
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    
    return this.http.post('http://localhost:8080/api/todos', JSON.stringify(todo), {headers: headers})
      .map((res:Response) => res.json())
      .catch((error:Response) => Observable.throw(error.json()));
  }
 
  deleteTodo(id){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        const token = localStorage.getItem('token') 
        ?  '?token=' +localStorage.getItem('token')
        : '';
        headers.append('Authorization', token);
 
        this.http.delete('http://localhost:8080/api/todos' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });   
 
    });
 
  }
 
}
