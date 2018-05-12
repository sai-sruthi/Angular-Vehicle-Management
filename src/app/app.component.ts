import { Component } from '@angular/core';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import {VehicleListService} from "./services/vehicle-list.service";
import {VehicleviewService} from "./services/vehicleview.service";
import {ViewvehicleComponent} from "./viewvehicle/viewvehicle.component";
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import {UndoserviceService} from "./services/undoservice.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 entryComponents: [VehiclelistComponent,ViewvehicleComponent],
 providers:[VehicleListService,VehicleviewService,AddVehicleComponent,UndoserviceService]

})
export class AppComponent {
}
