import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-resultat-hotel',
  templateUrl: './resultat-hotel.component.html',
  styleUrls: ['./resultat-hotel.component.css']
})
export class ResultatHotelComponent implements OnInit {
  offer: any;

  constructor(private apiService:FlightService) { }

  ngOnInit() {
    this.offer= this.apiService.result;
  }

}
