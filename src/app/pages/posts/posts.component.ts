import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postList: Post[];
  constructor(
   private postService: PostService) {
    this.postList = [];
  }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.postList = posts));
  }
}
