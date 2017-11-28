import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'arraysort',
  pure: false
})
export class ArraysortPipe implements PipeTransform {

  constructor ( public translate: TranslateService ) {}

  transform(
    items: Array<any>, 
    key?: string,
    hasLanguage?: string
  ): any {
    var itemsClone = Array.from(items)

    if(!hasLanguage) {
      return itemsClone.sort(function(a, b) {
        return a[key] - b[key];
      });
    } else {
      var currentLang = this.translate.currentLang;

      

      itemsClone.sort((a: any, b: any) => {
        if(a[key][currentLang] < b[key][currentLang]){
          return -1;
        }else if(a[key][currentLang] > b[key][currentLang]){
          return 1;
        }
      });
      console.log(itemsClone);
      return itemsClone;
    }
  }

}
