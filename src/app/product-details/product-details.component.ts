import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((datas) => {

      this.id = datas['id'];
      console.log(this.id);
    });
  }

}
