import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Praticien} from '../modele/praticien';
import {PraticienServiceService} from '../service/praticien-service.service';
import {Specialite} from '../modele/specialite';
import {User} from '../modele/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[lignePraticien]',
  templateUrl: './praticien-details.component.html',
  styleUrls: ['./praticien-details.component.css']
})
export class PraticienDetailsComponent implements OnInit {
@Input()
private user: User;
  @Input('praticien')
  private p: Praticien;

  @Input('specialites')
  private ls: Specialite[];

  @Output()
  private praticienRefresh = new EventEmitter<string[]>();

  constructor(private praticienService: PraticienServiceService, private aR: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.p)
    }

<<<<<<< HEAD
    this.aR.params.subscribe(params => {
      if (params.username) {
        this.user.login = params.username;
        console.log(this.user.login);
      } else {
        console.log('pas de params');
      }
    });
  }

  public priserdv() {
    this.router.navigate(['../priserdv', {pratlogin: this.p.nom_praticien}]);
=======
  public priserdv(p: Praticien) {
    this.router.navigate(['/priserdv', p.login]);
>>>>>>> 977b77c21169q0c51c2ba5e99386d3124f2b78f49
  }

}

