import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {

    //mevcut urldeki id yi almak için, activatedroute servisini kullanıyoruz.
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
  }

}
