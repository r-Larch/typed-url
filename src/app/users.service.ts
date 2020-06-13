import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  users: User[];

  constructor() {
    this.users = [
      { id: 1, username: "rlarch", fullName: "René Larch" },
      { id: 2, username: "foo", fullName: "Mr. Foo" },
      { id: 3, username: "bar", fullName: "Mrs. Bar" },
      { id: 4, username: "baz", fullName: "Dr. Baz" }
    ];
  }

  getById(id: number) {
    return this.users.find(x => x.id === id);
  }

  getByName(name: string) {
    return this.users.find(x => x.username === name);
  }
}

export interface User {
  id: number;
  username: string;
  fullName: string;
}
