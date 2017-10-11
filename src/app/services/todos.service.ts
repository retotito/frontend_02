import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


 
@Injectable()
export class TodosService extends DataService{
 
  constructor(http: Http) {
    super('http://localhost:8080/api/todos', http);
  }
}
