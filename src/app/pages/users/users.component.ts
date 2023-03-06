import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  loading: boolean = false;
  userList: User[];
  constructor(private userService: UserService) {
    this.userList = [];
  }
  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe((users) => {
      this.userList = users;
      this.loading = false;
    });
  }
}
