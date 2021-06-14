import { Pipe, PipeTransform } from '@angular/core';
import { Items } from 'src/app/items/items.component';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(itemList : Items[] , searchid : string): Items[]{
     if(!itemList || ! searchid){
       return itemList;
     }

     return itemList.filter(itemList =>
      itemList.id.toLocaleLowerCase().indexOf(searchid.toLocaleLowerCase()) !== -1);
  }

}
