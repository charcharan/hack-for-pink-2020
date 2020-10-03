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
      date: "Oct 15 2020",
      time : '11 AM',
      status : 'Pending',
      comment : "Need to consult doctor"
    },
    {
      rqst_id: 'Doctor Visit',
      reason: 'Update the task with initial doctor appointment date.',
      rqst_raised_by: "Logesh",
      date: "Oct 17 2020",
      time : '09 AM',
      status : 'Pending',
      comment : "Need to discuss about breat cancer."
    },
    {
      rqst_id: 'Doctor Visit',
      reason: 'Update the task with initial doctor appointment date.',
      rqst_raised_by: "Priya@543",
      date: "Oct 27 2020",
      time : '02 PM',
      status : 'Pending',
      comment : "Have to know symptoms of breat cancer."
    },
    {
      rqst_id: 'Doctor Visit',
      reason: 'Update the task with initial doctor appointment date.',
      rqst_raised_by: "Lavanya",
      date: "Oct 09 2020",
      time : '4 PM',
      status : 'Pending',
      comment : "Having sypmtoms of breast cancer and need to know type of test taken."
    },
  ]
  }

}
