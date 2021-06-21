import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(
    private sendUsername: RegistrationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      address: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.registrationForm);
    // this.sendUsername.onSendRegistrationName(
    //   this.registrationForm.get('username').value
    // );
    // this.router.navigate(['']);
  }

  onAddAddress(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.registrationForm.get('address')).push(control)
  }

  getControls() {
    return (this.registrationForm.get('address') as FormArray).controls;
  }
}
