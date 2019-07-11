import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {HeleneComponent} from './helene/helene.component';
import {PlanningConsultComponent} from './planning-consult/planning-consult.component';
import {RdvService} from './service/rdv.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import { CalendarTestComponent } from './calendar-test/calendar-test.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { PraticienDetailsComponent } from './praticien-details/praticien-details.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { AccPatientComponent } from './acc-patient/acc-patient.component';
import {HomePatientComponent} from './home-patient/home-patient.component';
import { HomePageComponent } from './home-page/home-page.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import {LoginPraticienComponent} from './login-praticien/login-praticien.component';
<<<<<<< HEAD
import { PatientCalendarComponent } from './patient-calendar/patient-calendar.component';
import { PatientRdvComponent } from './patient-rdv/patient-rdv.component';
=======
import {PatientRdvComponent} from './patient-rdv/patient-rdv.component';
>>>>>>> 074e560bb878d2a1e9687d79d7e02dd304c9af18



registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PlanningConsultComponent,
    HeleneComponent,
    PraticienDetailsComponent,
    PriseRdvComponent,
    AccPatientComponent,
    CalendarTestComponent,
    HomePatientComponent,
    HomePageComponent,
    PatientRdvComponent,
    LoginPatientComponent,
    LoginPraticienComponent,
    PatientCalendarComponent,
    PatientRdvComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule, BrowserAnimationsModule, NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [RdvService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
