import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePatientComponent } from './home-patient/home-patient.component';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HeleneComponent } from './helene/helene.component';
import { PraticienDetailsComponent } from './praticien-details/praticien-details.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { AccPatientComponent } from './acc-patient/acc-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePatientComponent,
    HeleneComponent,
    PraticienDetailsComponent,
    PriseRdvComponent,
    AccPatientComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
