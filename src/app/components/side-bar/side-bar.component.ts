import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

 
  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
    // this.sideNavService.sideNavToggleSubject.subscribe(()=> {
    //   this.sidenav.toggle();
    // });
  }



}
