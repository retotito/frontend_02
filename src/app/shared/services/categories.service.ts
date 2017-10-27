import { environment } from '../../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoriesService extends DataService{

  constructor(http: Http) {
    super(environment.resturl+'/api/categories', http);
   }

}
