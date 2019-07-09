import { Component, OnInit } from '@angular/core';
import {Praticien} from '../modele/praticien';
import {PraticienServiceService} from '../service/praticien-service.service';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  private praticiens: Praticien[] = [];

  constructor(private praticienService: PraticienServiceService) { }

  ngOnInit() {
    this.list();

  }

  public list() {
    this.praticienService.list().subscribe(res => {this.praticiens = res;})
  }
}
