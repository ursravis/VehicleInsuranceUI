import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { QuoteService } from '../quote.service';
export class Vehicle {
  vehicleNumber: string;
  model: string;
  year: number;
  type: string;
  public constructor(init?: Partial<Vehicle>) {
    Object.assign(this, init);
  }
}



@Component({
  selector: 'vi-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  customerVehicles: MatTableDataSource<Vehicle> = new MatTableDataSource<Vehicle>();
  displayedColumns: string[] = ['VehicleNumber', 'Model', 'Year', 'Type', 'actionsColumn'];
  vehicleForm = this.fb.group({
    vehicleNumber: ['', Validators.required],
    model: ['', Validators.required],
    year: ['3243', Validators.compose(
      [Validators.minLength(4), Validators.maxLength(4)])],
    type: ['SUV', Validators.required]
  });
  constructor(private fb: FormBuilder,private quoteService:QuoteService) {
  }

  ngOnInit() {
  }
  addNewVehicle() {
    var newVehicle = new Vehicle(this.vehicleForm.value);
    this.customerVehicles.data.push(newVehicle);
    this.customerVehicles.data = this.customerVehicles.data;
    console.log(this.customerVehicles);
  }
  deleteVehicle(vehicle: Vehicle) {
    this.customerVehicles.data = this.customerVehicles.data.filter(it => it != vehicle);
    this.customerVehicles.data = this.customerVehicles.data;
  }
  saveVehicles()
  {
    this.quoteService.createVehicles(this.customerVehicles.data);
  }
}
