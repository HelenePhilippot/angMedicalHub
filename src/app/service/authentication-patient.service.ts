import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../modele/user';
import {LoginPatientService} from './login-patient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationPatientService {

  private token: User = null;

  constructor(private router: Router, private loginPatientService: LoginPatientService) { }

  canActivate(): boolean {
    if (this.token !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  public login(user: User) {
    this.loginPatientService.login(user).subscribe((res => {
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
