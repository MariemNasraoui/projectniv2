import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { ResultatHotelComponent } from './resultat-hotel/resultat-hotel.component';
import { FlightFromComponent } from './flight-from/flight-from.component';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import { OptionComponent } from './option/option.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flight', component: FlightBookingComponent },
  { path: 'hotel', component: ResultatHotelComponent },
  { path: 'flightForm', component: FlightFromComponent },
  { path: 'flighthome', component: FlightComponent },
  { path: 'hotelhome', component: HotelComponent },
  { path: 'hotelbooking', component: HotelbookingComponent },
  {path:'MoreInfo', component:OptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
