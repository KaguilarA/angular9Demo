import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from './../../models/user.model';
import { serviceUrl } from './../../config/config';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  auth2: any;
  userUrl: string = `${serviceUrl}user`;
  currentUserAuth: any;

  constructor(
    public http: HttpClient
  ) {
    this.getCurrentSessionData();
  }

  getCurrentSessionData() {
    const storageData: string = sessionStorage.getItem(`adminProToken`);
    if (storageData !== null) {
      const parsedData: string = decodeURIComponent(storageData);
      const currentUserLogin: any = JSON.parse(parsedData);
      this.currentUserAuth = currentUserLogin.token;
      return currentUserLogin;
    } else {
      this.currentUserAuth = undefined;
      return null;
    }
  }

  googleLogin(token: any) {
    const userUrl: string = `${serviceUrl}login/google`;
    return this.http.post(userUrl, {token}).pipe(
      map((res: any) => {
        this.saveLoginData(res.data);
        return true;
      })
    );
  }

  login(credentials: any) {
    const userUrl: string = `${serviceUrl}login`;
    const rememberCredentials = credentials.remember;
    return this.http.post(userUrl, credentials).pipe(
      map((res: any) => {
        if (rememberCredentials === true) {
          this.saveLoginData(res.data);
        } else {
          sessionStorage.removeItem(`adminProToken`);
        }
        return true;
      })
    );
  }

  logout() {
    this.currentUserAuth = undefined;
    sessionStorage.removeItem(`adminProToken`);
  }

  registerUser(newUserData: any, isGoogleRegiste: boolean) {
    for (const key in newUserData) {
      if (newUserData.hasOwnProperty(key)) {
        const data = newUserData[key];
        if (data === ``) {
          newUserData[key] = undefined;
        }
      }
    }
    const newUser = new User(newUserData.firstName, newUserData.firstSurname,
      newUserData.email, newUserData.password, 2, isGoogleRegiste,
      newUserData.secondName, newUserData.secondSurname);

    return this.http.post(this.userUrl, newUser).pipe(
      map(res => {
        const doneData = {
          title: `Registro realizado`,
          text: `Su cuenta se ha creado exitósamente.`,
        };
        return doneData;
      })
    );
  }

  saveLoginData(loginData) {
    const adminProToken = JSON.stringify({
      token: loginData.token,
      email: loginData.userMatch.email,
      id: loginData.userMatch._id
    });
    sessionStorage.setItem(`adminProToken`, encodeURIComponent(adminProToken));
    this.currentUserAuth = loginData.token;
  }

  validateSesion() {
    const isValid = (this.currentUserAuth !== undefined) ? true : false;
    return isValid;
  }

}
