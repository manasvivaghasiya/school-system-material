import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { ProfessorsComponent } from './professors/professors.component';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { LibraryComponent } from './library/library.component';
import { DepartmentComponent } from './department/department.component';
import { StaffComponent } from './staff/staff.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DashboardComponent,
    EventManagementComponent,
    ProfessorsComponent,
    StudentComponent,
    CoursesComponent,
    LibraryComponent,
    DepartmentComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PagesModule { }
