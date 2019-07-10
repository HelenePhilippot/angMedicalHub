import { Component, OnInit } from '@angular/core';
import {User} from '../modele/user';
import {AuthenticationPraticienService} from '../service/authentication-praticien.service';



@Component({
  selector: 'app-login-praticien',
  templateUrl: './login-praticien.component.html',
  styleUrls: ['./login-praticien.component.css']
})
export class LoginPraticienComponent implements OnInit {


  private user: User = new User();
  private message = '';
  private test: boolean;

  constructor(private authPraticienService: AuthenticationPraticienService) {
  }

  ngOnInit() {
  }

  public login() {
    this.authPraticienService.login(this.user);
  }
}
