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
  tken = 'gHW42t4jBVDzOWE4Sh473gNHyIxu';
  result: any;





  ville0:string;
  dat:Date;
  ville1:string;
  dat1:Date;
  name:string;
  latitude:any;
  longitude:any;




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







  flight_MBD(ville0,dat):Observable<any>{

    var headers = new HttpHeaders()

    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + this.tken);

    return this.http.get('https://test.api.amadeus.com/v1/travel/analytics/air-traffic/booked?originCityCode='+ville0+'&period='+dat,{ headers });
  }

  flight_BTP(ville1,dat1):Observable<any>{

    var headers = new HttpHeaders()

    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + this.tken);

    return this.http.get('https://test.api.amadeus.com/v1/travel/analytics/air-traffic/busiest-period?cityCode='+ville1+'&direction=ARRIVING&period='+dat1,{ headers });

  }
  getApiH(name):Observable<any>{

    return this.http.get('https://api.opencagedata.com/geocode/v1/json?q='+name+'&key=0018fc6432154dee967c50c6ee2010dc');
    
  }

  Airport_NR():Observable<any>{

    var headers = new HttpHeaders()

    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + this.tken);

    return this.http.get('https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude='+this.latitude+'&longitude='+this.longitude,{ headers });

 
  }
}
