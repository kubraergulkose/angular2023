import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor(private route:Router, private activatedrouter: ActivatedRoute) {}

  ngOnInit(): void {
    let page = this.activatedrouter.snapshot.queryParamMap.get('page');
    let pagesize = this.activatedrouter.snapshot.queryParamMap.get('pagesize');
    console.log('pagesize:'+pagesize);
    console.log('page'+page);

    this.activatedrouter.queryParamMap.subscribe(x => {
      console.log(x);
    })
  }

  goSecondPage() {
    //this.route.navigateByUrl('secondpage');
    this.route.navigate(['secondpage',5]);
  }

  changeQueryParams() {
    this.route.navigate(['firstpage'], {queryParams: {'page': 5, 'pagesize':25}})
  }


}
