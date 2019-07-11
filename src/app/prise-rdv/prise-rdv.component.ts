import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../modele/user';
import {Praticien} from '../modele/praticien';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRdvComponent implements OnInit {

  private user: User;
  @Input()
  private praticien: Praticien;


  constructor(private aR: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.aR.params.subscribe(params => {
      if (params.username) {
        this.user.login = params.username;
      }
      if (params.pratlogin) {
        this.praticien.login = params.pratlogin;
      }
    });

  }


}
