import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = "sagnik";

  onUserInput(event){
    this.name = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
