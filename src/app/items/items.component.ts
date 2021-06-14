import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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



  @Input()
  finalName!: string;
  constructor(private activateRoute: ActivatedRoute) {

  }

  onUserClick(event){
    let id = event.target.previousElementSibling.previousElementSibling;
    console.log(id);

  }

  ngOnInit() {}

}
