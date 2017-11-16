import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catfilter'
})
export class CatfilterPipe implements PipeTransform {

  transform(
    items: Array<any>, 
    key?: String,
    value?: any,
    parent?: any
  ): any {
    if (!parent) {
      return items.filter(item => item.catType == value);   
    } else {
      return items.filter(item => item.catType == value && item.parent == parent);
    }
  }

}
