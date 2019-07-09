import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePatientComponent } from './home-patient/home-patient.component';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { HeleneComponent } from './helene/helene.component';
import { PraticienDetailsComponent } from './praticien-details/praticien-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePatientComponent,

    HeleneComponent,
    PraticienDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
