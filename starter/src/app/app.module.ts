import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlightService} from "./flight-booking/flight-search/flight.service";

import {FlightBookingModule} from "./flight-booking/flight-booking.module";
import {AbstractFlightService} from "./flight-booking/flight-search/abstract-flight.service";
import {DummyFlightService} from "./flight-booking/flight-search/dummy-flight.service";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    //RouterModule.forRoot(APP_ROUTES)
    RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true})
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  providers: [
    // FlightService
    //{provide: FlightService, useClass: FlightService }
   { provide: AbstractFlightService, useClass: FlightService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
