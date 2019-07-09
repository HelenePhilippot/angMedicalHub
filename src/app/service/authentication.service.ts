import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {User} from '../modele/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private token: User = null;

  constructor(private router: Router) {

  }

  canActivate(): boolean {
    if (this.token !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  public login(user: User) {
    if (user.login === 'toto' && user.password === 'toto') {
      this.token = user;
      return true;
    } else {
      return false;
    }
  }
}
