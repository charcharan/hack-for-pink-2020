import { ChangeDetectionStrategy,Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import {MatDialog} from '@angular/material/dialog';
import { SignUpSuccessDialogComponent } from '../sign-up-success-dialog/sign-up-success-dialog.component';
import { RegistrationSuccessDialogComponent } from '../registration-success-dialog/registration-success-dialog.component';
import { Router} from '@angular/router';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentRegistrationComponent implements OnInit {
  // @ViewChild('form') form: NgForm;
  // competitorFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern( '^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}')
  // ]);
  dateTime =  new Date((new Date().getTime()));
  tomorrow = new Date();
  studentRegistrationForm: FormGroup;
  public isValidIdInput: boolean;
  constructor(public router: Router,private formBuilder: FormBuilder,private loginService:LoginService,public dialog:MatDialog) { 
    this.tomorrow.setDate(this.tomorrow.getDate());
  }

  ngOnInit() {

    this.studentRegistrationForm = this.formBuilder.group({
      fatherName: ['', Validators.required],      
      motherName: ['', Validators.required],
      fatherQualification: ['', Validators.required],      
      password: ['', Validators.required],
      motherQualification: ['', Validators.required],      
      fatherOccupation: ['', Validators.required],
      motherOccupation: ['', Validators.required],      
      fatherOrganization: ['', Validators.required],
      motherOrganization: ['', Validators.required],      
      annualIncome: ['', Validators.required],
      email: ['', Validators.required],      
      fatherMobile: ['', Validators.required],
      motherMobile: ['', Validators.required],      
      address1: ['', Validators.required],
      address2: ['', Validators.required],      
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],      
      zipcode: ['', Validators.required],
      studentName: ['', Validators.required],      
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      standard: ['', Validators.required],      
      prevCurriculum: ['', Validators.required],
      emergencyPer: ['', Validators.required],      
      emerContact: ['', Validators.required],
      emergencyContct: ['', Validators.required]      
    });
  }

  // public idValidator(e: boolean): void {
  //   this.form.controls['Id'].setErrors({'incorrect': e});
  //   this.isValidIdInput = e;
  // }

  register() {
    this.loginService.doStudentRegister(this.studentRegistrationForm).subscribe(res => {
      if(res.message === "Inserted"){
        const dialogRef = this.dialog.open(RegistrationSuccessDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate(['/payment']);        
          this.studentRegistrationForm.reset();          
        });
     }
    })

  }
  
  resetForm(): void {
    this.studentRegistrationForm.reset();
  }
}
