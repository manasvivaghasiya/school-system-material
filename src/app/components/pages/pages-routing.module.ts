import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { LibraryComponent } from './library/library.component';
import { ProfessorsComponent } from './professors/professors.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'event-management',component:EventManagementComponent},
  {path:'courses',component:CoursesComponent},
  {path:'department',component:DepartmentComponent},
  {path:'library',component:LibraryComponent},
  {path:'professor',component:ProfessorsComponent},
  {path:'staff',component:StaffComponent},
  {path:'student',component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
