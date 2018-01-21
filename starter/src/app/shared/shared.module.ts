import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CityPipe} from "./pipes/city.pipe";
import {StatusColorPipe} from "./pipes/statuscolor.pipe";
import { CityValidatorDirective } from './validation/city-validator.directive';
import { AsyncCityValidatorDirective } from './validation/async-city-validator.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    StatusColorPipe,
    CityValidatorDirective,
    AsyncCityValidatorDirective

  ],
  exports: [
    CityPipe,
    StatusColorPipe,
    CityValidatorDirective,
    AsyncCityValidatorDirective

  ]
})
export class SharedModule { }
