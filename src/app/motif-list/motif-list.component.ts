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
private nomP: string;
  private praticien: Praticien;
  private motifs: Motif[] = [];


  // tslint:disable-next-line:max-line-length
  constructor(private motifService: MotifService, private praticienService: PraticienServiceService, private aR: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.list();
    this.getPraticien();
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

  public validermotif(m: Motif) {
    localStorage.setItem('motif', m.libelle);
   this.router.navigate(['/validermotif']);
  }

  public list() {
    this.motifService.list().subscribe(res => {
      for (let m of res) {
        if (m.praticien.nom_praticien === localStorage.getItem('praticien')) {
          this.motifs.push(m);
        }
      }
    });
  }
}
