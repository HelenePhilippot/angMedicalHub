import {Routes} from '@angular/router';
import {HomePatientComponent} from './home-patient/home-patient.component';
import {PriseRdvComponent} from './prise-rdv/prise-rdv.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import {LoginPraticienComponent} from './login-praticien/login-praticien.component';
import {HomePageComponent} from './home-page/home-page.component';
import {MotifListComponent} from './motif-list/motif-list.component';
import {HomePraticienComponent} from './home-praticien/home-praticien.component';
import {PatientCalendarComponent} from './patient-calendar/patient-calendar.component';


export const routes: Routes = [
  {path: 'homepatient/:username', component: HomePatientComponent},
  {path: 'patientcal', component: PatientCalendarComponent},
  {path: 'homepraticien/:username', component: HomePraticienComponent},
  {path: 'priserdv/:pratlogin', component: MotifListComponent},
  {path: 'validermotif', component: PriseRdvComponent},
  {path: 'loginpatient', component: LoginPatientComponent},
  {path: 'loginpraticien', component: LoginPraticienComponent},
  {path: 'homepage', component: HomePageComponent},

];
