import { environment } from '../../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AvatarService extends DataService{
 
  constructor(http: Http) {
    //super('http://localhost:8080/api/todos', http);
    //super(environment.resturl+'/api/uploads', http);
    super(environment.resturl+'/api/avatars', http);
  }
}
