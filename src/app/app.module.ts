import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionComponent } from './option/option.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightFromComponent } from './flight-from/flight-from.component';
import { ResultatHotelComponent } from './resultat-hotel/resultat-hotel.component';
import { ResultatCarComponent } from './resultat-car/resultat-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionComponent,
    FlightBookingComponent,
    FlightFromComponent,
    ResultatHotelComponent,
    ResultatCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
