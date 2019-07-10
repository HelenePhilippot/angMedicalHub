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
  private test: boolean;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.user);
  }
}
