import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component {

  count:number = 1;
  increaseNumber():void {
    this.count = this.count +1
  }

}
