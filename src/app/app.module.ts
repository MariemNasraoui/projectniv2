import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionComponent } from './option/option.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightFromComponent } from './flight-from/flight-from.component';
import { ResultatHotelComponent } from './resultat-hotel/resultat-hotel.component';
import { ResultatCarComponent } from './resultat-car/resultat-car.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionComponent,
    FlightBookingComponent,
    FlightFromComponent,
    ResultatHotelComponent,
    ResultatCarComponent,
    FlightComponent,
    HotelComponent,
    HotelbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
