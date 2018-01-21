import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {PassengerSearchComponent} from "./passenger-search/passenger-search.component";
import {FlightCardComponent} from "./flight-card/flight-card.component";
import {StatusToggleComponent} from "./status-toggle/status-toggle.component";
import {RouterModule} from "@angular/router";
import {FLIGHT_BOOKING_ROUTES} from "./flight-booking.routes";
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import {FlightService} from "./flight-search/flight.service";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    ReactiveFormsModule

  ],
  declarations: [
    FlightSearchComponent,
    PassengerSearchComponent,
    FlightCardComponent,
    StatusToggleComponent,
    FlightEditComponent

  ],
  providers:[
    FlightService
  ],
  exports: [
    PassengerSearchComponent,
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
