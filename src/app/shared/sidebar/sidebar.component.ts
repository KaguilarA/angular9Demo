import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/service.index';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(
    public service: SidebarService,
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
