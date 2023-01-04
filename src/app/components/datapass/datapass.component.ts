import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datapass',
  templateUrl: './datapass.component.html',
  styleUrls: ['./datapass.component.scss']
})


export class DatapassComponent {

  @Input() name : string | undefined;



}
