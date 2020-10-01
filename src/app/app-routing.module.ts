import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from '../app/login-component/login-component.component';
import { StudentRegistrationComponent } from '../app/student-registration/student-registration.component';
import { AdminHomeComponent } from '../app/admin-home/admin-home.component';
import { DoctorComponent } from '../app/doctor/doctor.component';
import { WarriorComponent } from '../app/warrior/warrior.component';
import { TimelineViewComponent } from '../app/timeline-view/timeline-view.component';
import { MakeAWishComponent } from '../app/make-a-wish/make-a-wish.component';
import { ImageSharingComponent } from '../app/image-sharing/image-sharing.component';
import { AppointmentListComponent } from '../app/appointment-list/appointment-list.component';
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
  },
  {
    path : 'doctor',
    component : DoctorComponent
  },
  {
    path : 'warrior',
    component : WarriorComponent
  },
  {
    path : 'timeLine',
    component : TimelineViewComponent
  },
  {
    path : 'makeAwish',
    component : MakeAWishComponent
  },
  {
    path : 'imageSharing',
    component : ImageSharingComponent
  },
  {
    path : 'appointment',
    component : AppointmentListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
