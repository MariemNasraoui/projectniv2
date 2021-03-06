import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
 
  offers:any;
  constructor( private ApiServce:FlightService,  private router:Router) { }

  ngOnInit() {
    this.offers=  this.ApiServce.results;
  }
  
  gotobooknow(offer:any){
    this.ApiServce.myOffer = offer;
    this.router.navigate(['/flightForm']);
  }
}
