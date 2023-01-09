import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getPostList () {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getSinglePost (id:number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

  }
}
