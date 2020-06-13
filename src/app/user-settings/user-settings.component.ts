import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService, User } from '../users.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  user: User;
  color: string;

  constructor(
    public route: ActivatedRoute,
    private users: UsersService
  ) { }

  ngOnInit() {
    this.route.paramMap
      // .pipe(getTypedParams<UserSettingsRouteParams>())
      .subscribe(_ => {
        const name = _.get('name');
        this.color = _.get('color');
        this.user = this.users.getByName(name);
      });
  }

}

export interface UserSettingsRouteParams {
  name: string;
  color: string;
}
