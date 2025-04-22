import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
interface Message {
  patient: string;
  appointment: Date;
  type: string;
  status: 'Sent' | 'Delivered' | 'Failed' | 'Queued';
  sentTime: Date;
}


@Component({
  selector: 'app-message-tracking',
  templateUrl: './message-tracking.component.html',
  styleUrls: ['./message-tracking.component.css']
})
export class MessageTrackingComponent {

  constructor() {}

  ngOnInit(): void {}

  people = [
    { name: 'Ahmed Ali', phone: '01000000001', sent: false, delivered: false, read: false },
    { name: 'Mona Mohamed', phone: '01000000002', sent: true, delivered: false, read: true },
    { name: 'Sara Hassan', phone: '01000000003', sent: true, delivered: true, read: false }
  ];


  logData() {
    console.log(this.people);
  }

}
