import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})
export class CalenderViewComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin], // ← الحل هنا
    initialView: 'dayGridWeek',
    events: [
      { title: 'Reminder: Ahmed Ali', date: '2025-04-20' },
      { title: 'Reminder: Mona Adel', date: '2025-04-21' }
    ]
  };

  constructor() {}

  ngOnInit(): void {}


}
