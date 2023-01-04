import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  date = new Date();
  myprice: number = 15200;

  person1 : Person = {firstName: 'ahmet', lastName:'veli', age: 25}
  name: string = 'kubraergulkose'
  name2: string = 'kubraErgulKose'

  ngOnInit(): void {


    
  }

}


interface Person {
  firstName:string;
  lastName:string;
  age: number;
}
