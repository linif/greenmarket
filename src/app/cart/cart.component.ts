import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddToCartService } from '../add-to-cart.service';
import item from '../items.json';

export interface Items {
  id: string;
  name: string;
  price: number;
  details: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Items[] = item;
  cart: any = [];
  id: String = '';

  constructor(private cartService: AddToCartService) {}

  pushCartItems(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == this.id) {
        this.cart.push({
          cartItem_id: this.items[i].id,
          cartItem_name: this.items[i].name,
          cartItem_price: this.items[i].price,
          cartItem_details:this.items[i].details,
          cartItem_quantity: 1,
        });
        break;
      }
    }
    console.log(this.cart)
  }

  ngOnInit(): void {
    this.cartService.getProductId().subscribe((e) => {
      this.id = e;
      if (this.id == null || this.id == '') {
        console.log('Blank');
      } else {
        if (this.cart.length == 0) {
          this.pushCartItems(this.id);
        } else {
          for (let j in this.cart) {
            if (this.cart[j].p_id === this.id) {
              this.cart[j].p_qty++;
              break;
            } else {
              this.pushCartItems(this.id);
            }
          }
        }
      }
    });
  }
}

// if(this.cartItems.length === 0){
//   this.cartItems.push({
//     p_id: item.id,
//     p_name: item.name,
//     p_price: item.price,
//     p_qty: 1
//   });
// }else{
//   for(let i in this.cartItems){
//     if(this.cartItems[i].p_id === item.id){
//       this.cartItems[i].p_qty++;
//       break;
//     }else{
//       this.cartItems.push({
//         p_id: item.id,
//         p_name: item.name,
//         p_price: item.price,
//         p_qty: 1
//       });
//     }
//   }
// }
