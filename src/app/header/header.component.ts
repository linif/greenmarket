import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name= 'sagnik'
  @Output() sendName = new EventEmitter();

  onUserInput(event){
    this.name = event.target.value;
    this.sendName.emit(this.name)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
