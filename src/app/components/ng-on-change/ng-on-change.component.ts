import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-change',
  templateUrl: './ng-on-change.component.html',
  styleUrls: ['./ng-on-change.component.scss']
})
export class NgOnChangeComponent implements OnInit, OnChanges {
  @Input() count : number | undefined;

  constructor () {

  }

  ngOnChanges (changes: any) : void {
    console.log(changes);

  }

  ngOnInit(): void {
    
  }

}
