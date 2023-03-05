import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }
  getPostsById(id: number) {
    return this.http.get<Post>(
      `http://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
  getCommentsById(id: number) {
    return this.http.get<any>(
      `http://jsonplaceholder.typicode.com/comments/${id}`
    );
  }
}
