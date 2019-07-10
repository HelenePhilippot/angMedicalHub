import {Routes} from '@angular/router';
import {HomePatientComponent} from './home-patient/home-patient.component';
import {PriseRdvComponent} from './prise-rdv/prise-rdv.component';


export const routes: Routes = [
  {path: 'homepatient', component: HomePatientComponent},
  {path: 'priserdv', component: PriseRdvComponent},
];
