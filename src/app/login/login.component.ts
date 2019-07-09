import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {User} from '../modele/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private user: User = new User();
  private message = '';

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  public login() {
    if (this.authService.login(this.user)) {
      console.log('ok');
    } else {
      this.message = 'Authentification impossible !';
    }
  }

}
