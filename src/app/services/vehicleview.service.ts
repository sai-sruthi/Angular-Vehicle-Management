import { Injectable } from '@angular/core';

@Injectable()
export class VehicleviewService {
  vehicle;
  constructor() { }

setvehicle(vehiclesent){

 this.vehicle=vehiclesent;
// console.log(this.vehicle);
}

getvehicle(){
  //console.log(this.vehicle);
  return this.vehicle;
}
}
