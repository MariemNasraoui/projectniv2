import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  ville3: string;
  period1: string;
  ville: string;
  period: string;
  villeh: string;
  checkin: string;
  checkout: string;
  adulte: string;
  room: string;
  rate: string;
  tken = 'WYEEvqZoiGPHyZXkjksioIAB9F2d';
  result: any;
  constructor(private http: HttpClient) { }

  getApi(depart, arrive, dateAller, dateRetour, travelClass, adult, children): Observable<any> {

    var headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.tken);

    return this.http.get('https://test.api.amadeus.com/v1/shopping/flight-offers?origin=' + depart + '&destination=' + arrive + '&departureDate=' + dateAller + '&returnDate=' + dateRetour + '&travelClass=' + travelClass + '&adults=' + adult + '&children=' + children + '&max=3', { headers })

  }
  getApiHotel(villeh, checkin, checkout, adulte, room, rate): Observable<any> {

    var headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.tken);
    return this.http.get('https://test.api.amadeus.com/v1/shopping/hotel-offers?cityCode=' + villeh + '&checkInDate=' + checkin + '&checkOutDate=' + checkout + '&adults=' + adulte + '&radius=5&radiusUnit=KM&roomQuantity=' + room + '&ratings=' + rate + '&includeClosed=false&bestRateOnly=true&sort=NONE', { headers })
  }
}
