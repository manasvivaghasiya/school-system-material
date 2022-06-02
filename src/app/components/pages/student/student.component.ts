import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: PeriodicElement[] = [
  {rollNo: 1, name: 'BArry Hernandez', department:'Mechanical', mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 2, name: 'Guy Spencer', department:  'Computer',mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 3, name: 'April Murphy', department:'Science', mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 4, name: 'Johnny Hoffman', department:'M.B.B.S', mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 5, name: 'Stanley Gray', department: 'Arts',mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 6, name: 'Angel Brewer', department: 'Music',mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 7, name: 'Pamela Phillips', department: 'Commerce',mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 8, name: 'SAlvador Elliott', department: 'Civil', mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 9, name: 'Minnie Mathews', department:'Music',mobileNo:999999999,admissionDate:'12/2/2022',action:'action'},
  {rollNo: 10, name: 'Ellen Day', department:'Computer',mobileNo:999999999,admissionDate:'12/2/2022',action:'action'}
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['rollNo', 'name', 'department', 'mobileNo','admissionDate','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface PeriodicElement {
  rollNo:number;
  name: string;
  department: string;
  mobileNo: number;
  admissionDate:string;
  action: string;
}

