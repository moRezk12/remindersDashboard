import { Component, OnInit } from '@angular/core';


interface Reminder {
  title: string;
  time: string;
  status: string;
}

interface Appointment {
  id: number;
  name: string;
  date: string;
  doctor: string;
  status: string;
  reminders: Reminder[];
  showReminders?: boolean; // حالة إظهار التذكيرات
}

@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})
export class CalenderViewComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  filterName = '';
  filterDoctor = '';

  appointments: Appointment[] = [
    {
      id: 1,
      name: 'Ahmed Ali',
      date: '2025-04-20',
      doctor: 'Dr. Mohamed',
      status: 'Confirmed',
      reminders: [
        { title: 'Appointment Reminder', time: '2025-04-19 08:00', status: 'Sent' },
        { title: '1 Hour Before Reminder', time: '2025-04-20 07:00', status: 'Delivered' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Hassan',
      date: '2025-04-22',
      doctor: 'Dr. Yasser',
      status: 'Pending Confirmation',
      reminders: [
        { title: 'Initial Reminder', time: '2025-04-21 10:00', status: 'Scheduled' }
      ]
    }
  ];


  get filteredAppointments(): Appointment[] {
    return this.appointments.filter(a =>
      a.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
      a.doctor.toLowerCase().includes(this.filterDoctor.toLowerCase())
    );
  }

  toggleReminders(appointment: Appointment) {
    appointment.showReminders = !appointment.showReminders;
  }


}
