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

  messages: Message[] = [
    {
      patient: 'John Doe - #123',
      appointment: new Date('2025-04-20T14:00:00'),
      type: '24hr before',
      status: 'Sent',
      sentTime: new Date('2025-04-19T14:00:00')
    },
    {
      patient: 'Jane Smith - #456',
      appointment: new Date('2025-04-21T09:30:00'),
      type: 'Day of appointment',
      status: 'Queued',
      sentTime: new Date('2025-04-21T07:00:00')
    },
    {
      patient: 'Ali Omar - #789',
      appointment: new Date('2025-04-22T17:00:00'),
      type: '2hr before',
      status: 'Failed',
      sentTime: new Date('2025-04-22T15:00:00')
    }
  ];

  displayedColumns: string[] = ['patient', 'appointment', 'type', 'status', 'sentTime'];
  dataSource = new MatTableDataSource<Message>(this.messages);

  constructor() {}

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  

}
