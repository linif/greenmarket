import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private subject = new BehaviorSubject<any>(null);

  constructor() {}

  sendInformation(info: any) {
    this.subject.next(info);
  }

  getInformation() {
    return this.subject.asObservable();
  }
}
