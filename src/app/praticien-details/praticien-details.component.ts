import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Praticien} from '../modele/praticien';
import {PraticienServiceService} from '../service/praticien-service.service';
import {Specialite} from '../modele/specialite';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[lignePraticien]',
  templateUrl: './praticien-details.component.html',
  styleUrls: ['./praticien-details.component.css']
})
export class PraticienDetailsComponent implements OnInit {

  @Input('praticien')
  private p: Praticien;

  @Input('specialites')
  private ls: Specialite[];

  @Output()
  private praticienRefresh = new EventEmitter();

  constructor(private praticienService: PraticienServiceService) {
  }

  ngOnInit(): void {
  }

}

