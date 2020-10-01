import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-emotion-dialog',
  templateUrl: './emotion-dialog.component.html',
  styleUrls: ['./emotion-dialog.component.scss']
})
export class EmotionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmotionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
