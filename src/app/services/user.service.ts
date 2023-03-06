import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  //user methods
  getUsers() {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }
  getUsersById(id: number) {
    return this.http.get<User>(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
