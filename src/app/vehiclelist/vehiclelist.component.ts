import { Component, OnInit } from '@angular/core';
import {VehicleListService} from "../services/vehicle-list.service";
import {VehicleviewService} from "../services/vehicleview.service";
import {Router,ActivatedRoute,Params} from "@angular/router";
import {ViewvehicleComponent} from "../viewvehicle/viewvehicle.component";
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
import {UndoserviceService} from "../services/undoservice.service";

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css'],
})
export class VehiclelistComponent implements OnInit {
 vehicles;

 undoaction:string="";
 undoflag:boolean=false;
 vehicledelted
  constructor(private _vehicleService:VehicleListService,private router:Router,private _viewvehicle:VehicleviewService,private _undoservice:UndoserviceService) {
    this.vehicles=this._vehicleService.getVehicle();
    this.undoaction=this._undoservice.getundo();
   }

  ngOnInit() {

  }

  deleteVehicle(vehicleid){
      for(var i=0;this.vehicles.length;i++){
        if(this.vehicles[i].id==vehicleid){
          this.vehicles.splice(i,1);
          break;
        }
      }
      this.vehicledelted=this._vehicleService.deleteVehicle(vehicleid);
      this.undoaction="delete";
      this._undoservice.setundo(this.undoaction);
      this._undoservice.setflag();
      
  }

  undoChange(){
     this.undoaction=this._undoservice.getundo();
     this.undoflag=this._undoservice.getflag();
    if(this.undoflag==true){
      if(this.undoaction=="delete"){
          this.vehicles.push(this.vehicledelted);
          //console.log(this.vehicledelted);
          this._vehicleService.addVehicle(this.vehicledelted);
           this._undoservice.setflagfalse();
        }
        else if(this.undoaction=="added"){
           this.vehicles.pop();
          this._vehicleService.deleteLast();
          this._undoservice.setflagfalse(); 
        }
    }
      else{
        alert("Can not undo again");
   } 
}  

viewVehicle(vehicleid){
  var vehicle;
  for(var i=0;this.vehicles.length;i++){
        if(this.vehicles[i].id==vehicleid){
          vehicle=this.vehicles[i];
          break;
        }
      }

  this.router.navigate(['/view']);
  this._viewvehicle.setvehicle(vehicle);

}
addVehicle(){
    this.router.navigate(['/add']);

  }
}
