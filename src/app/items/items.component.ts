import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';
import item from '../items.json';

export interface Items {
  id: string;
  name: string;
  price: number;
  details: string;
  count:number;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Items[] = item;
  ItemName = '';
  ItemPrice = '';
  counter = 0;
  cartArray = [{}];

  @Input()
  finalName!: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private addToCart: AddToCartService
  ) {}

  ngOnInit() {}

  onClickAdd(itemId : any) {
    this.counter = this.counter + 1;
    this.addToCart.onSendInformation(this.counter);
    for(let i = 0;i<this.items.length;i++){
      if(this.items[i].id===itemId){
        if(this.cartArray.includes(this.items[i])){
          this.items[i].count = this.items[i].count + 1;
          continue;
        }
        this.cartArray.push(item[i]);
      }
    }
    this.addToCart.onSendCartData(this.cartArray);
  }

  onClickRemove(itemId:any) {
    if (this.counter != 0) {
      this.counter = this.counter - 1;
      this.addToCart.onSendInformation(this.counter);
      this.addToCart.onSendCartData(itemId);
    } else {
      alert('Cart is Empty');
    }
  }
}
