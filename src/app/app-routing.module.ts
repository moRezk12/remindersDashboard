import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderViewComponent } from './components/calender-view/calender-view.component';
import { MessageTrackingComponent } from './components/message-tracking/message-tracking.component';

const routes: Routes = [

  {path : '', component : CalenderViewComponent},
  {path : 'message', component : MessageTrackingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
