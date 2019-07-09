import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planning-consult',
  templateUrl: './planning-consult.component.html',
  styleUrls: ['./planning-consult.component.css']
})
export class PlanningConsultComponent implements OnInit {
  private day: Date;
  private tabDispo = [];

  constructor() {
  }

  ngOnInit() {
    this.planning();
  }

  public planning() {
    const numbers = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let i of numbers) {
      this.tabDispo.push(this.day.setHours(i));
      return this.tabDispo;
    }
  }
}
