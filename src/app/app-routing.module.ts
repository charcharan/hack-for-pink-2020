import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from '../app/login-component/login-component.component';
import { StudentRegistrationComponent } from '../app/student-registration/student-registration.component';
import { AdminHomeComponent } from '../app/admin-home/admin-home.component';
const routes: Routes = [
  {
    path: '',
    component : LoginComponentComponent 
  },
  {
    path : 'studReg',
    component: StudentRegistrationComponent
  },
  {
    path : 'admHome',
    component : AdminHomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
