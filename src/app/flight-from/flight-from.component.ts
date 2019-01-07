import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-from',
  templateUrl: './flight-from.component.html',
  styleUrls: ['./flight-from.component.css']
})
export class FlightFromComponent implements OnInit {
  offers: any;
 myoffer:any;
  firstname:any;
  lastname:any;
  birthday:any;
  phonenumber:any;
  email:any;
  passnumber:any;
  passdate:any;
  Bookingflights: Observable<any[]>;
  Bookingflight: AngularFireList<any>;
  registerForm: FormGroup;
  submitted = false;
  
  
  constructor(private ApiServce:FlightService,db: AngularFireDatabase, private formBuilder: FormBuilder,private router:Router) { 
    this.Bookingflight = db.list('Bookingflight');
    this.Bookingflights =this.Bookingflight.snapshotChanges().pipe(map(changes=>changes.map(c=> ({key: c.payload.key, ...c.payload.val()}))));
  
  }

  ngOnInit() {
    
    this.offers=  this.ApiServce.results;
    this.myoffer = this.ApiServce.myOffer;
    console.log("-----------------------------------------");
    console.log(this.myoffer);
    console.log("-----------------------------------------");

    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });
  
  }
  get f() { return this.registerForm.controls; }

  Addtobook() {
    let  Total= document.getElementById("Total").innerHTML;
    let  PricePerAdult= document.getElementById("PricePerAdult").innerHTML;
    this.submitted = true;
console.log(PricePerAdult);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return  alert('plz');;
    }
   
    alert('your booking is validate');
    
    const bookingf={
      FirtName: this.firstname,
      LastName:this.lastname,
      Birthday: this.birthday,
      PhoneNumber:this.phonenumber,
      Email:this.email,
      PassportNumber:this.passnumber,
      PassportExpirationDate:this.passdate,
      Total:Total,
      PricePerAdult:PricePerAdult
    };
    this.Bookingflight.push(bookingf)
    this.router.navigate(['/home']);
  }}

