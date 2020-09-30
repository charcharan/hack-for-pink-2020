import { ChangeDetectionStrategy,Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-make-a-wish',
  templateUrl: './make-a-wish.component.html',
  styleUrls: ['./make-a-wish.component.scss']
})
export class MakeAWishComponent implements OnInit {

  dateTime =  new Date((new Date().getTime()));
  tomorrow = new Date();
  makeAwishForm: FormGroup;
  public isValidIdInput: boolean;
  constructor(public router: Router,private formBuilder: FormBuilder,public dialog:MatDialog) { 
    this.tomorrow.setDate(this.tomorrow.getDate());
  }


  ngOnInit() {
    this.makeAwishForm = this.formBuilder.group({
      firstName: ['', Validators.required],      
      lastName: ['', Validators.required],      
      email: ['', Validators.required],      
      guradianMobile: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],      
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],      
      zipcode: ['', Validators.required],
      guardianName: ['', Validators.required],      
      dob: ['', Validators.required],
      wish: ['', Validators.required]  
    });
  }

}
