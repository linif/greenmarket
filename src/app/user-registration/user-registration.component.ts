import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user = ""
  constructor(private registor:RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
      this.user = form.value.username;
      this.registor.onSendRegistrationName(this.user)
      this.router.navigate([''])
  }
}
