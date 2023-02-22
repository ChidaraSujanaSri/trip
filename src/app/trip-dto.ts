export class TripDTO {

   userId : string;
   fromLocation:string;
   toLocation:string;
   distanceInKm:number;

   constructor(
   userId : string, 
   fromLocation:string,
   toLocation:string,
   distanceInKm:number,
   )
   {
    this.userId = userId;
    this. fromLocation= fromLocation;
    this.toLocation = toLocation;
    this.distanceInKm = distanceInKm;
   }
}
