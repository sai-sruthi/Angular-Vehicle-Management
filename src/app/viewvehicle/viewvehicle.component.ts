import { Component, OnInit } from '@angular/core';
import {VehicleviewService} from "../services/vehicleview.service";
import {Router,ActivatedRoute,Params} from "@angular/router";

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.css']
})
export class ViewvehicleComponent implements OnInit {
  vehicle;
  constructor(private _viewvehicle:VehicleviewService,private routes:Router) { 
    this.vehicle=this._viewvehicle.getvehicle();
    //console.log(this.vehicle);
  }

  ngOnInit() {

  }
  goback(){
    this.routes.navigate(['']);
  }

}
