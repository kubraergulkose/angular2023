import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(public helperService: HelperService) {}

  ngOnInit(): void {
    console.log(this.helperService.upper('angular second component'))
  }

  Show() {
    console.log(this.helperService.title)
  }

}
