import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userList: User[];
  constructor(private userService: UserService) {
    this.userList = [];
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.userList = users));
  }
}
