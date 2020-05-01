import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.userService.logout();
    this.router.navigate([`/login`]);
  }
}
