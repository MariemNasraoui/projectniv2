import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  results:any;
  types: any;
  price:any;
  links: any;
  depart: string;
  dateAller: any;
  dateRetour: any;
  arrive: String;
  travelClass:any;
  adult:any;
  dictionaries: any;
  children: any;
  ville: string;
  period: string;
  villeh: string;
  checkin: string;
  checkout: string;
  adulte: string;
  room: string;
  rate: string;
  result: any;
  constructor(private ApiServce:FlightService, private apiService:FlightService , private router:Router) { }

  ngOnInit() {
  }
  getCity(){
    this.ApiServce.getApi(this.depart, this.arrive ,this.dateAller,this.dateRetour,this.travelClass,this.adult,this.children).subscribe( async file =>{
   //Read the result field from the JSON response.
   console.log(this.adult)
   console.log(file);
   this.dictionaries=file.dictionaries;
   this.results=file.data;
   this.ApiServce.results = this.results;
   this.types=this.results.offerItems;
   this.router.navigate(['/flight']);
  })
  }
  getthehotel() {

    this.apiService.getApiHotel(this.villeh,this.checkin,this.checkout,this.adulte,this.room,this.rate).subscribe(doc => {
      console.log(doc.data);
      this.result = doc.data;
      this.apiService.result=this.result;
      this.router.navigate(['/hotel']);

    });

  }
}
