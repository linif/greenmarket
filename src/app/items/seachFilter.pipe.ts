import { Pipe, PipeTransform } from '@angular/core';
import { Items } from 'src/app/items/items.component';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(itemList : Items[] , searchString : string): Items[]{
     if(!itemList || ! searchString){
       return itemList;
     }

     return itemList.filter(itemList =>
      itemList.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);
  }

}
