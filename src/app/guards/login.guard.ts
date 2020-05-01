import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/service.index';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  canActivate() {
    if (this.userService.validateSesion()) {
      return true;
    } else {
      this.router.navigate([`/login`]);
      return false;
    }
  }
}
