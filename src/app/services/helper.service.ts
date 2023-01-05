import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class HelperService {

  title: string = "default-title";

  constructor() { }

  upper (text:string) {
    return text.toUpperCase ();
  }
}
