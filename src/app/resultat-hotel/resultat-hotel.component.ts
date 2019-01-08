import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resultat-hotel',
  templateUrl: './resultat-hotel.component.html',
  styleUrls: ['./resultat-hotel.component.css']
})
export class ResultatHotelComponent implements OnInit {
  offer: any;

  constructor(private apiService:FlightService, private router:Router) { }

  ngOnInit() {
    this.offer= this.apiService.result;
  }
  gotoformhotel(){
    this.router.navigate(['/hotelbooking']);
  }
}
