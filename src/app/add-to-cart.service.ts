import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddToCartService {

  private subject = new BehaviorSubject<any>(null);

  constructor() { }

  sendProductId(id: String){
    console.log(id);
    this.subject.next(id);
  }

  getProductId(){
    return this.subject.asObservable();
  }

}
