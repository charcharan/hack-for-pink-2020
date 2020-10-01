import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screening-methods',
  templateUrl: './screening-methods.component.html',
  styleUrls: ['./screening-methods.component.scss']
})
export class ScreeningMethodsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
