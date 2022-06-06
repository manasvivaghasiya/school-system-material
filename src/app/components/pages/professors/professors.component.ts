import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


const ELEMENT_DATA: PeriodicElement[] = [
  {url:'../../assets/korea.png',name: 'Sarah smith', department: 'Mechanical', degree:'M.E',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'kurt Ross', department: 'Computer', degree: 'M.com,B.ED',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'Roberto Castro', department:'Science', degree: 'B.Sc,M.Sc',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'Zoe Castro', department: 'Mathematics', degree: 'M.Com,B.Ed',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'Peter Graham', department:'Mechanical', degree: 'M.E',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'Patsy Marshall', department:  'Mathematics', degree: 'M.Com,B.Ed',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'Teresa West', department: 'Science', degree: 'M.E',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'Vera Larson', department: 'Computer', degree: 'M.Com,B.Ed',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'Gabriella Harris', department:'Music', degree: 'B.A',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
  {url:'../../assets/korea.png', name: 'Vera Lasrson', department:'Computer', degree: 'M.Com,B.Ed',mobileNo:999999999,joiningDate:'12/2/2022',action:'action'},
];

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {
  displayedColumns: string[] = ['url','name', 'department', 'degree', 'mobileNo','joiningDate','action'];
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
  url:string;
  name: string;
  department: string;
  degree: string;
  mobileNo: number;
  joiningDate:string;
  action:string;
}
