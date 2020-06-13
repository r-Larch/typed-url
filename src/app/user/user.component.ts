import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService, User } from '../users.service';
import { getTypedParams } from 'typed-url';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    public route: ActivatedRoute,
    private users: UsersService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(getTypedParams<UserRouteParams>())
      .subscribe(_ => {
        this.user = this.users.getById(_.id);
      });
  }

}

export interface UserRouteParams {
  id: number;
  name: string;
}
