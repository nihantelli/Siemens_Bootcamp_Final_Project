import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  loading: boolean = false;
 
  detailUser?: User;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.loading = true;
    //getting id from route and accessing to methods in services
    const detailId = this.activatedRoute.snapshot.params['id'];
    this.userService.getUsersById(detailId).subscribe((detail) => {
      this.detailUser = detail;
    });
    this.activatedRoute.params.subscribe((param: any) => {
      this.userService.getUsersById(param.id).subscribe((x) => {
        this.detailUser = x;
        this.loading = false;
      });
    });
  }
}
