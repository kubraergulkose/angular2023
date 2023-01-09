import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first, from, Observable, of } from 'rxjs';
import { Post } from './models/post';
import { User2 } from './models/user2';
import { PageServiceService } from './pages/page-service.service';
import { ApiService } from './services/api.service';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  firstName : string = 'Kübra&Ademm'
  user: User2 | undefined;
  post: Post [] = [];

  constructor(private pageservice: PageServiceService, private helperservice: HelperService, private http : HttpClient, private api: ApiService ) {
    this.pageservice.write();
  }
  ngOnInit(): void {

    // let values = of('adem', 5, 15,25,'denemelerce');
    // values.subscribe(x => {
    //   console.log(x);
    // })

    // this.helperservice.myobservable.subscribe( {
    //   next(data){console.log(data)}, // data yayınlandığında çalışır
    //   error(err) {console.log(err)}, //hata oluştuğunda çalışır
    //   complete() {console.log('data yayınlama işlemi sona erdi.')} //data yayınlama sona erdiğinde çalılır.
     
    // })

    // //filtering operators
    // const myArray = from([785,6,7,25,63,85,12])
    // myArray.pipe(first(z => z>5 && z<100)).subscribe(x => {console.log(x)});

    this.http.get<User2>('https://jsonplaceholder.typicode.com/todos/5').subscribe(x => {
      console.log(x)
      this.user = x;
    })

   this.api.getPostList().subscribe(x => {
      this.post = x;
      console.log('Postlarım');
      console.log(x);
    })



    
  }





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

