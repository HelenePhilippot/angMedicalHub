import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePatientComponent } from './home-patient/home-patient.component';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HeleneComponent } from './helene/helene.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePatientComponent,
    HeleneComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
