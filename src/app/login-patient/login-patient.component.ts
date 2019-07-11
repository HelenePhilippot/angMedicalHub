import { Component, OnInit } from '@angular/core';
import {User} from '../modele/user';
import {AuthenticationPatientService} from '../service/authentication-patient.service';

@Component({
  selector: '[login-patient]',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  private user: User = new User();
  private message = '';
  private test: boolean;

  constructor(private authPatientService: AuthenticationPatientService) {
  }

  ngOnInit() {
  }

  public login() {

    this.authPatientService.login(this.user);
  }

}
