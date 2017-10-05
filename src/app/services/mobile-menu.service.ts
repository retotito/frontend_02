import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MobileMenuService {
  isOpen: Boolean = false;

  constructor() { }


  // Observable string sources
  private componentMethodCallSource = new Subject<any>();
  
  // Observable string streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  // Service message commands
  callComponentMethod() {
    this.componentMethodCallSource.next(this.isOpen);
  }


}
