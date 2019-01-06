import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-from',
  templateUrl: './flight-from.component.html',
  styleUrls: ['./flight-from.component.css']
})
export class FlightFromComponent implements OnInit {
  offers: any;

  constructor(private ApiServce:FlightService) { }

  ngOnInit() {
    this.offers=  this.ApiServce.results;
  }

}
