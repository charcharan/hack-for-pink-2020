import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  @ViewChild('ccNumber') ccNumberField: ElementRef;
  @ViewChild('form') form: NgForm;
  months = [{
    name: "January",
    value: "January"
  },{
    name: "February",
    value: "February"
  },{
    name: "March",
    value: "March"
  },{
    name: "April",
    value: "April"
  },{
    name: "May",
    value: "May"
  },{
    name: "June",
    value: "June"
  },{
    name: "July",
    value: "July"
  },{
    name: "August",
    value: "August"
  },{
    name: "September",
    value: "September"
  },{
    name: "October",
    value: "October"
  },{
    name: "November",
    value: "November"
  },{
    name: "December",
    value: "December"
  }];
  year = [{
    year: 2020,
    value: 2020
  },{
    year: 2021,
    value: 2021
  },{
    year: 2022,
    value: 2022
  },{
    year: 2023,
    value: 2023
  },{
    year: 2024,
    value: 2024
  },{
    year: 2025,
    value: 2025
  },{
    year: 2026,
    value: 2026
  }]
  competitorFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern( '^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}')
  ]);
  constructor(public dialog: MatDialog,public router: Router) { }

  ngOnInit() {
  }
//   creditCardNumberSpacing() {
//     const input = this.ccNumberField.nativeElement;
//     const { selectionStart } = input;
//     const { cardNumber } = this.form['form'].controls;
// console.log(this.form);
//     let trimmedCardNum = cardNumber['cardNo'].replace(/\s+/g, '');

//     if (trimmedCardNum.length > 16) {
//       trimmedCardNum = trimmedCardNum.substr(0, 16);
//     }

//      /* Handle American Express 4-6-5 spacing */
//     const partitions = trimmedCardNum.startsWith('34') || trimmedCardNum.startsWith('37') 
//                        ? [4,6,5] 
//                        : [4,4,4,4];

//     const numbers = [];
//     let position = 0;
//     partitions.forEach(partition => {
//       const part = trimmedCardNum.substr(position, partition);
//       if (part) numbers.push(part);
//       position += partition;
//     })

//     cardNumber[].setValue(numbers.join(' '));

//     /* Handle caret position if user edits the number later */
//     if (selectionStart < cardNumber.value.length - 1) {
//       input.setSelectionRange(selectionStart, selectionStart, 'none');
//     }
//   }

makePayment() {
  const dialogRef = this.dialog.open(DialogOverviewComponent, {
    data: {
      action: "Payment"
    }
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['/angel']);
    });
}
cancelPayment() {
  this.router.navigate(['/angel'])
}
}
