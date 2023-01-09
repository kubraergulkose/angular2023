import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class HelperService {

  title: string = "default-title";

  myobservable: Observable<string>

  constructor() {
     this.myobservable = new Observable (data => {
      data.next('benim observable nesnem');
      data.next('benim observable nesnem 222');
      data.complete();
    })
   }

  upper (text:string) {
    return text.toUpperCase ();
  }
}
