import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name = '';

  cartItemCount = 0;
  @Output() sendName = new EventEmitter();

  constructor(private addToCart: AddToCartService) {}

  ngOnInit(): void {
    this.addToCart.getInformation().subscribe((e) => {
      this.cartItemCount = e;
    });
  }

  onUserInput(event) {
    this.name = event.target.value;
    this.sendName.emit(this.name);
  }
}
