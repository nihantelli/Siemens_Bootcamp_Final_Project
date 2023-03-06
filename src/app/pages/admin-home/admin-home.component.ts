import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent  {
 
  public postList: Post[] = [];
  public userList: User[] = [];
  constructor(
    public postService: PostService,
    public userService: UserService,
    public visitorService: VisitorStateService
  ) {
    // keeping data from services in array
    this.postService.getPosts().subscribe((x) => {
      this.postList = x;
      
    });
    this.userService.getUsers().subscribe((x) => {
      this.userList = x;
      
    });
  }
  
}
