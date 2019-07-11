import {Routes} from '@angular/router';
import {HomePatientComponent} from './home-patient/home-patient.component';
import {PriseRdvComponent} from './prise-rdv/prise-rdv.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import {LoginPraticienComponent} from './login-praticien/login-praticien.component';
import {HomePageComponent} from './home-page/home-page.component';


export const routes: Routes = [
  {path: 'homepatient/:username', component: HomePatientComponent},
  // {path: 'homepraticien/:username', component: HomePraticienComponent},
  {path: 'priserdv/:username/:pratlogin', component: PriseRdvComponent},
  {path: 'loginpatient', component: LoginPatientComponent},
  {path: 'loginpraticien', component: LoginPraticienComponent},
  {path: 'homepage', component: HomePageComponent},

];
