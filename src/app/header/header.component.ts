import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchBarInputString = '';
  usersName = "";
  cartItemCount = 0;
  @Output() sendName = new EventEmitter();

  constructor(private addToCart: AddToCartService, private registor:RegistrationService) {}

  ngOnInit(): void {
    this.addToCart.onGetInformation().subscribe((noOfItems) => {
      this.cartItemCount = noOfItems;
    });

    this.registor.onGetRegistrationName().subscribe((NameOfUser) =>{
      this.usersName = NameOfUser;
      console.log(this.usersName)
    })
  }

  onUserInput(event) {
    this.searchBarInputString = event.target.value;
    this.sendName.emit(this.searchBarInputString);
  }

}
