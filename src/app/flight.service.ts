import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  results: any;
  depart: any;
  arrive: any;
  dateAller: any;
  dateRetour: any;
  travelClass: any;
  adult: any;
  children: any;

  constructor( private http: HttpClient ) { }
  
  getApi(depart,arrive,dateAller,dateRetour,travelClass,adult,children):Observable<any>{

    var headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + 'wW7eBeAW9ROA9kHAd61gvXCo2thl');

    return this.http.get('https://test.api.amadeus.com/v1/shopping/flight-offers?origin='+depart+'&destination='+arrive+'&departureDate='+dateAller+'&returnDate='+dateRetour+'&travelClass='+travelClass+'&adults='+adult+'&children='+children+'&max=3',{ headers })
    
  }
}
