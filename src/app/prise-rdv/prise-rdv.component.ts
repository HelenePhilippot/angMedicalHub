import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../modele/user';
import {Praticien} from '../modele/praticien';
import {Motif} from '../modele/motif';
import {PraticienServiceService} from '../service/praticien-service.service';
import {MotifService} from '../service/motif.service';

@Component({
  selector: '[app-prise-rdv]',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRdvComponent implements OnInit {

  private user: User;
  @Input()
  private nomP: string;
  private nomM: string;
  private praticien: Praticien;
  private motif: Motif;


  // tslint:disable-next-line:max-line-length
  constructor(private aR: ActivatedRoute, private router: Router, private praticienService: PraticienServiceService, private motifService: MotifService) {
  }

  ngOnInit() {
    this.getPraticien();
    this.getMotif();
    }

  public getPraticien() {
    this.praticienService.findAll().subscribe(res => {
      for (let p of res) {
        if (p.nom_praticien === localStorage.getItem('praticien')) {
          this.praticien = p;

        }

      }
      this.nomP = this.praticien.nom_praticien;
    });
  }
  public getMotif() {
    this.motifService.list().subscribe(res => {
      for (let m of res) {
        if (m.libelle === localStorage.getItem('motif')) {
          this.motif = m;
        }

      }
      this.nomM = this.motif.libelle;
    });
  }
}
