import {Component, Input, OnInit} from '@angular/core';
import {User} from '../modele/user';
import {Praticien} from '../modele/praticien';
import {PraticienServiceService} from '../service/praticien-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MotifService} from '../service/motif.service';
import {Motif} from '../modele/motif';

@Component({
  selector: 'app-motif-list',
  templateUrl: './motif-list.component.html',
  styleUrls: ['./motif-list.component.css']
})
export class MotifListComponent implements OnInit {


  private user: User;

  @Input('prat')
  private praticien: Praticien;

  private motifs: Motif[] = [];


  constructor(private motifService: MotifService, private aR: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.list();
  }

  public validermotif() {
    this.router.navigate(['/validermotif', {username: sessionStorage.getItem('username'), motif: m}]);
  }

  public list() {
    this.motifService.list(this.praticien.nom).subscribe(res => {
      this.motifs = res;
    });
  }
}
