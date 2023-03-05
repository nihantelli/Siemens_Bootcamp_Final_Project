import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Comment } from 'src/app/models/comment';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comment?: Comment;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.postService.getCommentsById(id).subscribe((x) => {
      this.comment =x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      this.postService.getCommentsById(param.id).subscribe((x) => {
        this.comment = x;
      });
    });
  }
}
