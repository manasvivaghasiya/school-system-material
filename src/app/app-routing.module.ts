import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { FullLayoutComponent } from './Layout/full-layout/full-layout.component';

const routes: Routes = [
  {
    path:'app',
    component:FullLayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardMainComponent,
      },
      // {
      //   path:'header',
      //   component:HeaderComponent,
      // },
      // {
      //   path:'side-bar',
      //   component:SideBarComponent,
      // },
    ],
  },
  {
    path:'',
    component:FullLayoutComponent,
    loadChildren: () =>import('./components/pages/pages.module').then(x => x.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
