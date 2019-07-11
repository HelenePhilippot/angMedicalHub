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
    }


  public priserdv(prat: Praticien) {
    localStorage.setItem('praticien', this.p.nom_praticien);
    this.router.navigate(['/priserdv', localStorage.getItem('praticien')]);
  }

}

