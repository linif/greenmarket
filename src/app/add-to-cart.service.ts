import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private subject = new BehaviorSubject<any>(null);

  constructor() {}

  onSendInformation(info: any) {
    this.subject.next(info);
  }

  onGetInformation() {
    return this.subject.asObservable();
  }
}
