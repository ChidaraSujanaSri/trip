import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CabComponent } from './cab/cab.component';
import { DriverComponent } from './driver/driver.component';
import { UserComponent } from './user/user.component';
import { TripBookingComponent } from './trip-booking/trip-booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewBookComponent } from './view-book/view-book.component';
import { FormsModule } from '@angular/forms';

const allLinks:Routes = [
  {path:'bookyourride',component:TripBookingComponent},
  {path:'viewtripdetails',component:SampleComponent},
  {path:'driver',component:DriverComponent},
  //{path:'cabDetail/:cid',component:CabDetailComponent},
  {path:'viewCabDetails',component:CabComponent},
  {path:'home',component:HomepageComponent},
  {path:'cab',component:CabComponent}

  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CabComponent,
    DriverComponent,
    UserComponent,
    TripBookingComponent,
    HomepageComponent,
    HeaderComponent,
    LoginComponent,
    SampleComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allLinks)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
