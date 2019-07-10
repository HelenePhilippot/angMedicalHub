import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {User} from '../modele/user';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginService} from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private token: User = null;

  private httpHeaders: HttpHeaders;

  private httpOptions: any;

  constructor(private router: Router, private loginService: LoginService) {

  }


  canActivate(): boolean {
    if (this.token !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  public login(user: User) {
    this.loginService.login(user).subscribe((res => {
      this.token = user;
      console.log('loggé');
      this.router.navigate(['/home-patient']);
    }),
    err => {
      console.log('pas loggé');
      this.router.navigate(['/login']);
    });
  }
}
