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
        header: 'Doctor Visit',
        content: 'Update the task with initial doctor appointment date.',
        time: "Sep 27 2020",
        min: "",
        img : 'assets/doctorIcon.png'
      },
      {
        header: 'Biopsy',
        content: 'Update the task with the actual biopsy date and the mutation type.',
        time: "Sep 28 2020",
        min: "",
        img : 'assets/microscopeIcon.png'
      },
      {
        header: 'Treatment Mgmt',
        content: 'Welcome to Belong Therapeutic journey navigator. This tool will simplify managing your tasks, ... Read more',
        time: "Sep 30 2020",
        min: "",
        img : 'assets/notepad.png'
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
