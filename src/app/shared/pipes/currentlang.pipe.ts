import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'currentlang',
  pure: false
})
export class CurrentlangPipe implements PipeTransform {


  constructor ( public translate: TranslateService ) {}

  transform(multilangObject: any): String {
    if (multilangObject[this.translate.currentLang]) {
      return multilangObject[this.translate.currentLang];
    }
    else {
      return multilangObject.de;
    }
  }

}
