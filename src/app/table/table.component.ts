import { Component } from '@angular/core';

@Component({
  selector: 'vtl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor() { }

  rows = [
  	{ name: 'Austin', gender: 'Male', company: 'Swimlane'},
  	{ name: 'Dan', gender: 'Male', company: 'Coke' },
  	{ name: 'Jen', gender: 'Female', company: 'Pepsi' }
  ];
  columns = [
  	{ prop: 'name' },
  	{ name: 'Gender'},
  	{ name: 'Company'}
  ];

}
