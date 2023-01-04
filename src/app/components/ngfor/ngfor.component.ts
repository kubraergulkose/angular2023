import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  employers : string [] = ['kubra', 'sedat', 'aysegul', 'nursima', 'mehmetali'];
  users : User [] = [];

  constructor () {
    this.users.push(new User(1,'ahmet', 'a@g.com'));
    this.users.push(new User(2,'ahmet2', 'a2@g.com'));
    this.users.push(new User(3,'ahmet3', 'a3@g.com'));

  }

  ngOnInit ():void {
    console.log(this.employers);
    console.log(this.users);
  }



}




