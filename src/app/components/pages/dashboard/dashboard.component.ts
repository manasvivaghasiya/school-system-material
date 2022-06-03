import { Component, OnInit, VERSION } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import * as ApexCharts from 'apexcharts';

const ELEMENT_DATA: PeriodicElement[] = [
  {StudentName: 'John Wick', AssignedCoach:'Harris',Date: '12/05/2002',Time:'11:15',Action:'Action',colorName:'#FD9C40;'},
  { StudentName: 'John Wick', AssignedCoach: 'Bret Lee',Date: '12/05/2002',Time:'11:15',Action:'Action',colorName:'#3F8DFD;'},
  { StudentName: 'John Wick', AssignedCoach:'Keron',Date: '12/05/2002',Time:'11:15',Action:'Action',colorName:'#FF6E6E;'},
  { StudentName: 'John Wick', AssignedCoach: 'Clay jahnson',Date: '12/05/2002' ,Time:'11:15',Action:'Action',colorName:'#333340;'},
 
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] ,
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['select','StudentName', 'AssignedCoach', 'Date', 'Time','Action'];
  dataSource = ELEMENT_DATA;
  breakpoint!: number;
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  gridColumns = 4;

  

  constructor() { }
 
  ngOnInit(): void {
    this.chart()
    // if('this.breakpoint = (window.innerWidth <= 1200) ? 1 : 4;'){
    //   else()
    // }
    // this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    // this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
      // this.breakpoint = (window.innerWidth <=1000) ? 1 : 4;
      this.breakpoint = (window.innerWidth >= 1200) ? 4 : window.innerWidth <= 1200  && window.innerWidth >= 600? 2 : 1;
 


  }
  chart(){
    var options = {
      chart: {
        type: 'line',
        height:'500vh',
        width:'100%',
        color:'pink',
        toolbar: {
          show: false
        },
      },
      stroke: {
      curve: 'smooth',
    },

      series: [{
        name: 'sales',
        data: [0,250,500,750],
        colors:['#147AD6']
      },{
        colors:['#147AD6'],

        name: 'sales',
        data: [550,700,250,0],
      }],
      xaxis: {
        // categories: [JAN,FEB,MAR,APR,MAY,JUN]
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    }
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render();
  
  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth >= 1200) ? 4 : event.target.innerWidth <= 1200  && event.target.innerWidth >= 600? 2 : 1;
  }

}

export interface PeriodicElement {
  StudentName: string;
  AssignedCoach: string;
  Date:string;
  Time: string;
  Action: string;
  colorName:string;
  
}