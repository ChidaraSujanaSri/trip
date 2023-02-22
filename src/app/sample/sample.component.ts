import { Component } from '@angular/core';
import { TboperationsService } from '../tboperations.service';
import { TripDTO } from '../trip-dto';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  x : TripDTO = new TripDTO('','','',0);
  alltrips : TripDTO[] = [];
  constructor(private tripService:TboperationsService)
  {
  }

  getAlltrips()
  {
    this.tripService.getAllTripsFromSpring().subscribe(
      data=>{
        console.log("data :-"+data);
        this.alltrips = data;
      },err=>{
        console.log("error from spring", err);
        
      }
    );
  }


  getAlltripsByUser(userId:string)
  {
    let UserId:number=parseInt(userId);
    this.tripService.getAllTripsByUserFromSpring(UserId).subscribe(
      data=>{
        console.log("data :-"+data);
        this.alltrips = data;
      },err=>{
        console.log("error from spring", err);
        
      }
    );
  }

  getAlltripsByDriver(driverId:string)
  {
    let DriverId:number=parseInt(driverId);
    this.tripService.getAllTripsByDriverFromSpring(DriverId).subscribe(
      data=>{
        console.log("data :-"+data);
        this.alltrips = data;
      },err=>{
        console.log("error from spring", err);
        
      }
    );
  }

  





}
