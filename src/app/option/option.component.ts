import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

    resFMBD: any;
    public city: String;
    public date: Date;
    dat: Date;
    ville0: any;
  
    showResult = false;
  
    resFBTP: any;
    public city1: String;
    public date1: Date;
    dat1: Date;
    ville1: any;
  
  
  
    name: string;
    ville2: string;
    res;
    latitude: any;
    longitude: any;
  
  
    resANR;
  
    constructor(private service: FlightService) { }
  
  
    setValue() {
      console.log(this.showResult)
      this.showResult = true;
      console.log(this.showResult)
      this.ville0 = this.city;
      console.log(this.ville0);
      this.dat = this.date;
      console.log(this.dat);
  
      this.service.flight_MBD(this.ville0, this.dat).subscribe(FMBD => {
        console.log(FMBD);
        this.resFMBD = FMBD.data;
  
  
      });
  
    }
  
  
  
    setValue1() {
      this.showResult = true;
      this.ville1 = this.city1;
      console.log(this.ville1);
      this.dat1 = this.date1;
      console.log(this.dat1);
      this.service.flight_BTP(this.ville1, this.dat1).subscribe(FBTP => {
        console.log(FBTP);
        this.resFBTP = FBTP.data;
  
  
      });
  
    }
  
    setValue2() {
      this.name = this.ville2;
      console.log(this.name);
  
      this.service.getApiH(this.name).subscribe(data => {
        this.res = data.results;
  
        this.service.latitude = this.res[0].geometry.lat;
        this.service.longitude = this.res[0].geometry.lng;
        console.log(this.res[0].geometry.lng)
        console.log(this.service.longitude)
      });
    }
  
    setValue3() {
      this.showResult = true;
      this.service.Airport_NR().subscribe(ANR => {
        this.resANR = ANR.data;
        console.log(ANR);
  
  
      });
      //console.log(this.longitude)
    }
  
    ngOnInit() {
    }
  
  }
  