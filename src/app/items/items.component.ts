import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';
import item from '../items.json';

export interface Items {
  id: string;
  name: string;
  price: number;
  details: string;
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

  @Input()
  finalName!: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private addToCart: AddToCartService
  ) {}

  ngOnInit() {}

  onClickAdd() {
    this.counter = this.counter + 1;
    this.addToCart.onSendInformation(this.counter);
  }

  onClickRemove() {
    if (this.counter!=0) {
      this.counter = this.counter - 1;
      this.addToCart.onSendInformation(this.counter);

    } else {
      alert('Cart is Empty');
    }
  }
}
