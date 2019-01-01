import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';


@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
 
  offers:any;
  constructor( private ApiServce:FlightService) { }

  ngOnInit() {
    this.offers=  this.ApiServce.results;
  }
  

}
