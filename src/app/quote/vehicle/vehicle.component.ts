import { Component, OnInit } from '@angular/core';
export interface Vehicle {
  VehicleNumber: string;
  Model: string;
  Year: number;
  Type: string;
}

const ELEMENT_DATA: Vehicle[] = [
  {VehicleNumber:'Hydrogen', Model:'Toyota', Year: 2019, Type: 'EV'},
  {VehicleNumber:'Hydrogen', Model:'Toyota', Year: 2019, Type: 'EV'},
  {VehicleNumber:'Hydrogen', Model:'Toyota', Year: 2019, Type: 'EV'},
  {VehicleNumber:'Hydrogen', Model:'Toyota', Year: 2019, Type: 'EV'},
  {VehicleNumber:'Hydrogen', Model:'Toyota', Year: 2019, Type: 'EV'},
  {VehicleNumber:'Hydrogen', Model:'Toyota', Year: 2019, Type: 'EV'},
];

@Component({
  selector: 'vi-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  displayedColumns: string[] = ['VehicleNumber', 'Model', 'Year', 'Type'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
