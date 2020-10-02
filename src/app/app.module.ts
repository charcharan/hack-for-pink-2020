import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/modules/core.module';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from './material.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LoginService } from '../app/services/login.service';
import { NotifyService } from '../app/services/notify.service';
import { StudentRegistrationComponent } from '../app/student-registration/student-registration.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { AdminHomeComponent } from '../app/admin-home/admin-home.component';
import { SignUpSuccessDialogComponent } from './sign-up-success-dialog/sign-up-success-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { RegistrationSuccessDialogComponent } from './registration-success-dialog/registration-success-dialog.component';
import { DatePipe } from  '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { DoctorComponent } from '../app/doctor/doctor.component';
import { WarriorComponent } from '../app/warrior/warrior.component';
import { TimelineViewComponent } from '../app/timeline-view/timeline-view.component';
import { GravatarModule, GravatarConfig, FALLBACK, RATING } from 'ngx-gravatar';
import { MakeAWishComponent } from '../app/make-a-wish/make-a-wish.component';
import { ImageSharingComponent } from '../app/image-sharing/image-sharing.component';
import { AppointmentListComponent } from '../app/appointment-list/appointment-list.component';
import{ScreeningMethodsComponent} from '../app/screening-methods/screening-methods.component';
import { EmotionDialogComponent } from '../app/emotion-dialog/emotion-dialog.component';
import { AngelViewComponent } from '../app/angel-view/angel-view.component';
const gravatarConfig: GravatarConfig = {
  // fallback: FALLBACK.robohash,
  rating: RATING.g
  // hasBorder: true,
  // borderColor: "rgba(255, 0, 0, 0.1)",
  // backgroundColor: "rgba(255, 0, 0, 0.1)",
};

@NgModule({
  declarations: [AppComponent, LoginComponentComponent,StudentRegistrationComponent,
    AdminHomeComponent, SignUpSuccessDialogComponent,DialogOverviewComponent,
    RegistrationSuccessDialogComponent,DoctorComponent,WarriorComponent,EmotionDialogComponent,
    TimelineViewComponent,MakeAWishComponent,ImageSharingComponent,AppointmentListComponent,ScreeningMethodsComponent,
    AngelViewComponent],
    
  imports: [
    BrowserModule,
    MglTimelineModule,
    AppRoutingModule,
    FormsModule,
	  ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FullCalendarModule,
    CoreModule.forRoot(),
    ToastrModule.forRoot({ 
      timeOut: 0,
      disableTimeOut: true,
      closeButton: true     
    }),  
    AngularFireModule.initializeApp(environment.firebaseConfig),
    GravatarModule.forRoot(gravatarConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DatePipe,LoginService,NotifyService],
  entryComponents: [SignUpSuccessDialogComponent, DialogOverviewComponent, RegistrationSuccessDialogComponent,EmotionDialogComponent],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
