import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss']
})
export class TimelineViewComponent implements OnInit {
  entries = [];
  expandEnabled: boolean = true;
  constructor() { }

  ngOnInit() {
    this.setEntries();
  }
  setEntries() {
    this.entries = [      
      {
        header: 'Boarded school bus',
        content: 'Tracking bus route to school',
        time: "",
        min: ""
      },
      {
        header: 'Entered school',
        content: 'Entered school campus',
        time: "",
        min: ""
      },
      {
        header: 'Track attendance',
        content: 'Biometric verification for student',
        time: "",
        min: ""
      },
      {
        header: 'Classroom',
        content: 'Student is attending class',
        time: "",
        min: ""
      },
      {
        header: 'Lab',
        content: 'Student is attending lab session',
        time: "",
        min: ""
      },
      {
        header: 'Ground',
        content: 'Student is playing in ground',
        time: "",
        min: ""
      },
      {
        header: 'Back to home',
        content: 'Student started from school, track the school bus',
        time: "",
        min: ""
      }
    
    ];
  }
  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
}
