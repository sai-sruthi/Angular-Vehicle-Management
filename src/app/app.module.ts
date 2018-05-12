import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes=[
    {
        path:'',
        component:VehiclelistComponent
    },
    {
        path:'view',
        component:ViewvehicleComponent
    },
    {
        path:'add',
        component:AddVehicleComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    VehiclelistComponent,
    ViewvehicleComponent,
    AddVehicleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
