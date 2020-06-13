import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService, User } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(
    public route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.users = this.userService.users;
  }
}
