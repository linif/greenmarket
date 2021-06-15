import { Component, OnInit } from '@angular/core';
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
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  items: Items[] = item;
  id ='';
  private sub: any;
  constructor(private route: ActivatedRoute, private cartService: AddToCartService) { }

  addToCart(){
    this.cartService.sendProductId(this.id)
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((dataList) => {

      this.id = dataList['id'];
      console.log(dataList);
    });
  }

}
