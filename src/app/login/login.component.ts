import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user/user.service';

declare function initPlugIns();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string;
  remember: boolean = false;
  auth2: any;

  constructor(
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    initPlugIns();
    this.validateRememberUser();
    this.googleInit();
  }

  googleInit() {
    gapi.load(`auth`, () => {
      this.auth2 = gapi.auth2.init({
        client_id: `981247905213-lpi6b3beam5r6anbj77fl3qfq5v0qvad.apps.googleusercontent.com`,
        coockiepolicy: `single_host_origin`,
        scoope: `profile, email`
      });
      this.attachSignIn(document.getElementById(`loginGoogle`));
    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      const token = googleUser.getAuthResponse().id_token;
      this.userService.googleLogin(token)
        .subscribe(() => window.location.href = `/dashboard`);
    });
  }

  logIn(formData: NgForm) {
    const credentials = formData.value;
    this.userService.login(credentials)
      .subscribe(() => this.router.navigate([`/dashboard`]));
  }

  validateRememberUser() {
    const currentUser: any = this.userService.getCurrentSessionData();
    if (currentUser !== null) {
      this.email = currentUser.email;
      this.remember = true;
    } else {
      this.email = ``;
      this.remember = false;
    }
  }
}
