import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Flight} from "../../entities/flight";

@Component({
  selector: 'status-toggle',
  templateUrl: './status-toggle.component.html'
})
export class StatusToggleComponent implements OnInit {
  constructor() { }
  @Input() status: boolean;
  @Output() statusChange = new EventEmitter<boolean>();
  ngOnInit() {
  }
  delayed() {
    this.status = true;
    this.statusChange.next(this.status);
  }
  notDelayed() {
    this.status = false;
    this.statusChange.next(this.status);
  }



}
