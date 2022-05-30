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
    PagesRoutingModule
  ]
})
export class PagesModule { }
