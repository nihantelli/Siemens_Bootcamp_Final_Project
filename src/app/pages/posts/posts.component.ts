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
  loading: boolean = false;
  postList: Post[];
  constructor(private postService: PostService) {
    this.postList = [];
    
  }
  //accessing the post service and creating a post list
  ngOnInit(): void {
    this.loading = true;
    this.postService.getPosts().subscribe((posts) => {
      this.postList = posts;
      this.loading = false;
    });
  }
}
