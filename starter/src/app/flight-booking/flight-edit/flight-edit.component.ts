import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Flight} from "../../entities/flight";
import {FlightService} from "../flight-search/flight.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validateCity} from "../../shared/validation/city-validator";
import {validateRoundTrip} from "../../shared/validation/round-trip-validator";

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {
  id: string;
  showDetails: string;

  flight: Flight;
  errors: string;

  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private fb: FormBuilder){ }


  ngOnInit() {
    this.editForm = this.fb.group({
      id:   [1],
      from: [null, [Validators.required, Validators.minLength(3), validateCity(['Vienna', 'Berlin', 'Gleisdorf'])]],
      to:   [null],
      date: [null]
    });
    this.editForm.validator = validateRoundTrip;
    this.editForm.valueChanges.subscribe(v => {
      console.debug('changes', v);
    });
    console.log(this.editForm.value);
    console.log(this.editForm.valid);
    console.log(this.editForm.touched);
    console.log(this.editForm.dirty);

    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.showDetails = params['showDetails'];

        this.flightService.findById(this.id).subscribe(
          flight => { this.flight = flight; this.errors = ''; },
          err => { this.errors = 'Fehler beim Laden'; }
        );
      }
    )
  }

  save() {
    this.flightService.save(this.flight).subscribe(
      flight => {
        this.flight = flight;
        this.errors = 'Saving was successful!';
      },
      err => { this.errors = 'Error saving data'; }
    );
  }

}
