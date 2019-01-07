import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.css']
})
export class HotelbookingComponent implements OnInit {
  offers: any;
  firstnam:any;
  lastnam:any;
  birthda:any;
  phonenumbe:any;
  emai:any;
  Bookinghotels: Observable<any[]>;
  Bookinghotel: AngularFireList<any>;
  registerForm: FormGroup;
  submitted = false;
  constructor(private ApiServce:FlightService,db: AngularFireDatabase, private formBuilder: FormBuilder,private router:Router) {
    this.Bookinghotel = db.list('Bookinghotel');
    this.Bookinghotels =this.Bookinghotel.snapshotChanges().pipe(map(changes=>changes.map(c=> ({key: c.payload.key, ...c.payload.val()}))));
   }

  ngOnInit() {
    this.offers=  this.ApiServce.results;
    this.registerForm = this.formBuilder.group({
    emai: ['', [Validators.required, Validators.email]]
  });
  }
  get f() { return this.registerForm.controls; }

  Addtobookh() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return  alert('plz');
    }

    alert('your booking is validate');
    const bookingh={
      FirtNam: this.firstnam,
      LastNam:this.lastnam,
      Birthda:this.birthda,
      PhoneNumbe:this.phonenumbe,
      Emai:this.emai
    };
    this.Bookinghotel.push(bookingh)
    this.router.navigate(['/home']);
  }

}
