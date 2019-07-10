import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-acc-patient',
  templateUrl: './acc-patient.component.html',
  styleUrls: ['./acc-patient.component.css']
})
export class AccPatientComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/homepatient']);
  }

}
