import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderViewComponent } from './components/calender-view/calender-view.component';
import { MessageTrackingComponent } from './components/message-tracking/message-tracking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CalenderViewComponent,
    MessageTrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    {provide : LocationStrategy , useClass : HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
