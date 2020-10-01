import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { popin } from '../../app/core/animations/animations';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [popin]
})
export class AppointmentListComponent implements OnInit {
  pendingRequest = [];
  constructor() { }

  ngOnInit() {
    this.pendingRequest = [
      {
      rqst_id: 'Doctor Visit',
      reason: 'Update the task with initial doctor appointment date.',
      rqst_raised_by: "Ravi4567",
      date: "Sep 27 2020",
      time : '11 AM',
      status : 'Pending',
      comment : "Need to consult doctor"
    },
    {
      rqst_id: 'Doctor Visit',
      reason: 'Update the task with initial doctor appointment date.',
      rqst_raised_by: "Ravi4567",
      date: "Sep 27 2020",
      time : '11 AM',
      status : 'Pending',
      comment : "Need to consult doctor"
    },
    {
      rqst_id: 'Doctor Visit',
      reason: 'Update the task with initial doctor appointment date.',
      rqst_raised_by: "Ravi4567",
      date: "Sep 27 2020",
      time : '11 AM',
      status : 'Pending',
      comment : "Need to consult doctor"
    },
    {
      rqst_id: 'Doctor Visit',
      reason: 'Update the task with initial doctor appointment date.',
      rqst_raised_by: "Ravi4567",
      date: "Sep 27 2020",
      time : '11 AM',
      status : 'Pending',
      comment : "Need to consult doctor"
    },
  ]
  }

}
