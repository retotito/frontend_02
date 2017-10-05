import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class TodosService {
 
  constructor(public http: Http) {
 
  }
 
  getTodos(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      const token = localStorage.getItem('token') 
        ?  '?token=' +localStorage.getItem('token')
        : '';
      headers.append('Authorization', token);
 
      this.http.get('http://localhost:8080/api/todos', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }
 
  createTodo(todo){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      const token = localStorage.getItem('token') 
      ? localStorage.getItem('token')
      : '';
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', token);
      
      this.http.post('http://localhost:8080/api/todos', JSON.stringify(todo), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
 
    });
 
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
