import {Component, OnInit} from '@angular/core';
import {Praticien} from '../modele/praticien';
import {RdvService} from '../service/rdv.service';
import {Rdv} from '../modele/rdv';

@Component({
  selector: 'app-planning-consult',
  templateUrl: './planning-consult.component.html',
  styleUrls: ['./planning-consult.component.css']
})
export class PlanningConsultComponent implements OnInit {
  private praticien: Praticien;
  private drdv: Rdv[] = [];

  constructor(private rdvService: RdvService) {
  }

  ngOnInit() {
    this.list();
  }

  public list() {
    this.rdvService.list().subscribe(res => {
      this.drdv = res;
    });

  }
}
