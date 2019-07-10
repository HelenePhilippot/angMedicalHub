import {Component, OnInit} from '@angular/core';
import {Praticien} from '../modele/praticien';
import {PraticienServiceService} from '../service/praticien-service.service';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  private praticiens: Praticien[] = [];

  private recherche = '';

  constructor(private praticienService: PraticienServiceService) {
  }

  ngOnInit() {
    this.list();

  }

  public list() {
    this.praticienService.list().subscribe(res => {
      console.log(res);
      this.praticiens = res;
    });
  }

  public listnom() {
    this.praticienService.filtreNom(this.recherche).subscribe(res => {
      console.log(res);
      this.praticiens = res;
    });
  }

  public listville() {
    this.praticienService.filtreVille(this.recherche).subscribe(res => {
      console.log(res);
      this.praticiens = res;
    });
  }

  public listspe() {
    this.praticienService.filtreSpecialite(this.recherche).subscribe(res => {
      console.log(res);
      this.praticiens = res;
    });
  }
}
