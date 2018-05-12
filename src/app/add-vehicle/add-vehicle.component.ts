import { Component, OnInit } from '@angular/core';
import {vehicleModel} from '../vehicle.model';
import {VehicleListService} from "../services/vehicle-list.service";
import {Router,ActivatedRoute,Params} from "@angular/router";
import {UndoserviceService} from "../services/undoservice.service";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
  //entryComponents: [vehicleModel]
})
export class AddVehicleComponent implements OnInit {
 
undoaction:string;
  constructor(private _vehicleService:VehicleListService,private router:Router,private _undoservice:UndoserviceService) { 
    this.undoaction=this._undoservice.getundo();
  }
  vehicles = this._vehicleService.getVehicle();
  defaultDate:Date = new Date("January 1, 2016 10:13:00")
  
 
  vehicle_id:number=this.getvehicleid();
  model = new vehicleModel(this.vehicle_id+1,"","","","","",this.defaultDate,this.defaultDate);
 

  ngOnInit() {
  }
getvehicleid(){
   if(this.vehicles.length == 0){
      return 1; 
  }
  else{
    return this.vehicles[this.vehicles.length-1].id;
  }
}
  submitForm(){
   // console.log("hello");
    if(this.checkduplicates()==false){
      alert("Vehicle Service already registered");
         // console.log("hi");
      return;
    }
    else{
      if(this.checkValidDate()==false){
        alert("Select Valid Date");
        return;
      }
      else{
        this._vehicleService.addVehicle(this.model);
        this._undoservice.setundo("added");
        this._undoservice.setflag();
        this.router.navigate(['']);
      }
    }
  }

  checkValidDate(){
    if(this.model.pickupDta==this.defaultDate ||this.model.returnDate==this.defaultDate  ){
        return false;
    }
  }

  checkduplicates(){
      for(var i=0;i<this.vehicles.length;i++){
        if(this.vehicles[i].vehicleRegNo==this.model.vehicleRegNo){
          return false;
        }
      }
      return true;
  }
}
