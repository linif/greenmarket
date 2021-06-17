import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private subject = new BehaviorSubject<any>(null);

  constructor() { }

  onSendRegistrationName(name : any){
    this.subject.next(name);
  }

  onGetRegistrationName(){
    return this.subject.asObservable()
  }
}
