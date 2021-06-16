import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';
import item from '../items.json';


export interface Items {
  id:string;
  name: string;
  price: number;
  details:string;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items[] = item;
  ItemName = ''
  ItemPrice = ''
  counter = 0
  onClickAdd(event){
    this.counter = this.counter + 1;
    this.addToCart.sendInformation(this.counter)
  }

  onClickRemove(event){
    if(this.counter===0){
      alert("Cart is Empty")
    }
    else{
      this.counter = this.counter - 1;
      this.addToCart.sendInformation(this.counter)
    }

  }

  @Input()
  finalName!: string;

  constructor(private activateRoute: ActivatedRoute, private addToCart: AddToCartService) {

  }

  onUserClick(event){

  }

  ngOnInit() {}

}
