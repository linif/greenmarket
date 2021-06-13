import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import item from '../items.json';


export interface Items {
  id: Number;
  name: String;
  price: Number;
  details:String;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items[] = item;



  @Input()
  finalName!: string;
  constructor(private activateRoute: ActivatedRoute) {

  }

  onUserClick(event){
    var something = event.srcElement;
    console.log(something)
  }

  ngOnInit() {}

}
