import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { ResultatHotelComponent } from './resultat-hotel/resultat-hotel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flight', component: FlightBookingComponent },
  { path: 'hotel', component: ResultatHotelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
