import { Injectable } from '@angular/core';
import {Init} from "../init-vehicles";

@Injectable()
export class VehicleListService extends Init{

  constructor() { 
    super();
    console.log("Service Initialized");
    this.load();
  }

  getVehicle(){
      var vehicles=JSON.parse(localStorage.getItem('vehicles'));
      return vehicles;
  }
  getnumber(){
      var vehicles=JSON.parse(localStorage.getItem('vehicles'));
      return vehicles.length;
  }
  deleteVehicle(vehicleid){
    var vehicledeleted;
    var vehicledeletedarr;
    var vehicles=JSON.parse(localStorage.getItem('vehicles'));
    for(var i=0;vehicles.length;i++){
        if(vehicles[i].id==vehicleid){
         vehicledeletedarr= vehicles.splice(i,1);
         vehicledeleted=vehicledeletedarr[0];
         //console.log(vehicledeleted);
          break;
        }
      }
      localStorage.setItem('vehicles',JSON.stringify(vehicles));
      return vehicledeleted;
  }
  deleteLast(){
    var vehicles=JSON.parse(localStorage.getItem('vehicles'));
    vehicles=vehicles.slice(0,-1);
     localStorage.setItem('vehicles',JSON.stringify(vehicles));
  }

  addVehicle(vehicledeleted){
    //console.log(vehicledeleted);
    var vehicles=JSON.parse(localStorage.getItem('vehicles'));
    vehicles.push(vehicledeleted);
     localStorage.setItem('vehicles',JSON.stringify(vehicles));
  }
 
}
