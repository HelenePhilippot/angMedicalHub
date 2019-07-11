import { Injectable } from '@angular/core';
import {User} from '../modele/user';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginPraticienService} from './login-praticien.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationPraticienService {

  private token: string = null;

  constructor(private router: Router, private loginPraticienService: LoginPraticienService) {

  }
  canActivate(): boolean {
    if (this.token !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  public login(user: User) {
    this.loginPraticienService.login(user).subscribe((res => {
        this.token = 'praticien';
        console.log('loggé');
        sessionStorage.setItem('username', user.login);
        sessionStorage.setItem('password', user.password)
        console.log('loggé');
        this.router.navigate(['/homepraticien', user.login]);
      }),
      err => {
        console.log('pas loggé');
        this.router.navigate(['/login']);
      });
  }
}
