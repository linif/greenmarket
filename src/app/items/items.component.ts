import { Component, OnInit } from '@angular/core';
import item from '../items.json';


interface Items {
  id: Number;
  name: String;
  price: Number;
  image: String;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items[] = item;

  constructor(

  ) {

  }


  ngOnInit() {}

}
