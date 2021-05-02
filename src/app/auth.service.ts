import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  users: User[] = JSON.parse(localStorage.getItem("users")) || [];
  constructor(public router: Router) {
    this.checkIfLogin();
  }
  login(username: string, password: string): boolean {
    console.log(this.users);
    var log = false
    this.users.forEach(user => {
      if (user.username == username && user.password == password) {

        localStorage.setItem("login", "true");
        this.isLogin = true;
        log = true;

      }
    })
    return log;
  }
  checkIfUserAlredyExist(username: string, password: string) {
    console.log(this.users);
    var log = false
    this.users.forEach(user => {
      if (user.username == username && user.password == password) {

        localStorage.setItem("login", "true");
        this.isLogin = true;
        log = true;

      }
    })
    return log;
  }

  checkIfLogin() {
    if (localStorage.getItem("login") == "true") {
      this.router.navigate(["home"])
      this.isLogin = true

    } else {
      this.router.navigate(["login"])
      this.isLogin = false
    }
  }
  logout() {
    localStorage.setItem("login", null);
    this.checkIfLogin();
  }
  register(username: string, password: string) {
    console.log({ username, password });
    this.users = [...this.users, { username, password }]
    localStorage.setItem("users", JSON.stringify(this.users));
    this.router.navigate(["login"])

  }
}
