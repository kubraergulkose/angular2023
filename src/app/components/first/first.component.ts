import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit  {
  constructor (private helperservice: HelperService) {

  
  }

  ngOnInit(): void {
    console.log(this.helperservice.upper('angular first component'))
  }

  change() {
    return this.helperservice.title = 'başlık ilk componentte değiştirildi.'
  }

  

}
