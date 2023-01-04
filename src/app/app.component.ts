import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';
  firstName : string = 'Kübra&Ademm'

}


export class Product {

  //class lar üç ana bileşenden oluşur; fields, constructor and methods 

  //Fields 

  name:string;
  price:number;
  category: string;
  isPublished: string;

  //constructor

  constructor(name:string, price:number, category:string, isPublished:string) {
    this.name = 'Kübra&Adem';
    this.price = price;
    this.category = category;
    this.isPublished = isPublished;


  }

  //method 

topla (a1:number, a2:number) {
    console.log(a1+a2);
    return a1 + a2 ;
  }



}

///MİRAS ALMA////
class product1 extends Product {
  //product clasının değişkenlerini ve methodlarını kullanabiliriz.
  //constructor kullanıcaksak, miras aldığımız constructor almamız lazım. super () ifadesiyle alabiliriz.

  constructor (name: string, price: number, category: string, isPublished: string) {
    super(name, price, category, isPublished)
  }
}


/* Erişim Belirleyiciler -----------------------------------
private, public, protected
private dediğimizde sadece privateın tanımlandığı class lardan erişilebilir.
protected sadece miras aldığımız classlarda kullanabiliriz.  
nesne oluşturduğumuzda protected alanlara ulaşamayız  */

console.log("ahjsdjg");
var p = new Product("name",200,"cat","treu");
p.topla(5,3);

////INTERFACE ////

interface generalProduct {
  name: string;
  price: number;
  sayHello : () => string;
  sayHello2():void;
}

class car implements generalProduct {
  name: string;
  price: number;

  constructor (name:string, price:number) {
    this.name = name;
    this.price = price;
  }


  sayHello () {
    return 'Hello World';
  }

  sayHello2(): void {
    console.log('Hello World');
  }




  

}

