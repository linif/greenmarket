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
  cart:any=[];
  cartItemQuantity = '0';

  constructor(private cartService : AddToCartService) {}

  ngOnInit(): void {
    this.cartService.onGetInformation().subscribe((cartQuant) =>{
      this.cartItemQuantity = String(cartQuant);

    this.cartService.onGetCartData().subscribe((cartData)=>{
      this.cart.push(cartData);
      console.log(this.cart);
    })
    })
  }
}

// this.cartService.getProductId().subscribe((e) => {
//   this.id = e;
//   if (this.id == null || this.id == '') {
//     console.log('Blank');
//   } else {
//     if (this.cart.length == 0) {
//       this.pushCartItems(this.id);
//     } else {
//       for (let j in this.cart) {
//         if (this.cart[j].p_id === this.id) {
//           this.cart[j].p_qty++;
//           break;
//         } else {
//           this.pushCartItems(this.id);
//         }
//       }
//     }
//   }
// });
// }
