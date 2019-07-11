import {formatDate, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/es';

registerLocaleData(localeFr, 'fr');

export class Planning {
  private format = 'dd/MM/yyyy:hh-mm';
  private locale = 'fr';

  private dateInit = new Date('2019-05-01');
  private dateFin = new Date('2019-12-31');

  private tabPlanning = [];
constructor(){
}
  public planning() {
    for (let i: Date = this.dateInit; i < this.dateFin; i.setDate(i.getDate() + 1)) {
      this.tabPlanning.push(i);
    }
    return this.tabPlanning;
  }

}
