import { Injectable } from '@angular/core';

@Injectable()
export class CatmodalService {
  isOpen: boolean = false;
  editType: String;
  type: String;
  parent: Number;

  constructor() { }

}
